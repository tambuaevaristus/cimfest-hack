import PDFViewer from "@/components/file/PDFViewer";
import { addfile } from "@/slice/fileSlice";
import { Command } from "@/types";
import { useRouter } from "next/router";
import React, {
  ChangeEventHandler,
  MouseEventHandler,
  useEffect,
  useRef,
  useState,
} from "react";
import { BiTrash } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
// import * as pdfjs from "pdfjs-dist";

import PDFDisplay from "@/components/file/PDFDisplay";
import { RootState } from "@/store";
import { useSession } from "next-auth/react";
import { S3 } from "aws-sdk";

// import pdfjsWorker from "pdfjs-dist/legacy/build/pdf.worker.js";
export default function Create() {
  const [docName, setDocName] = useState("");
  const [numberOfCopies, setNumberOfCopies] = useState(1);
  const [paperType, setPaperType] = useState("Normal");
  const [paperSize, setPaperSize] = useState("A4");
  const [orientation, setOrientation] = useState("Potrait");
  const [printSides, setprintSides] = useState("Recto");
  const [printColor, setPrintColor] = useState("Black&White");
  const [paperColor, setPaperColor] = useState("");
  const [pagesToPrint, setPagesToPrint] = useState("");
  const commandList = useSelector((state: RootState) => state.file).commands;

  // Layout properties
  const [pagesPerSheet, setPagesPerSheet] = useState(1);
  const [layoutDirection, setLayoutDirection] = useState("");
  const [printType, setPrintType] = useState("Plain");
  const [biding, setBiding] = useState("No binding");
  const [bidingType, setBidingType] = useState("No binding");
  const [extraDetails, setExtraDetails] = useState("");
  const [filePath, setFilePath] = useState("");
  const [cost, setCost] = useState();
  // const [file, setFile] = useState("");
  const [saveState, setSaveState] = useState(true);

  // Pdf numbering

  const session = useSession();

  const [file, setFile] = useState<File | null>(null);
  const [upload, setUpload] = useState<S3.ManagedUpload | null>(null);
  const [progress, setProgress] = useState(0);
  const s3 = new S3({
    accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY,
    secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY,
  });

  useEffect(() => {
    setProgress(0);
    setUpload(null);
  }, [file]);

  const handleFileChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    e.preventDefault();
    setFile(e?.target?.files![0]);
  };

  const handleUpload: MouseEventHandler<HTMLButtonElement> = async (e) => {
    e.preventDefault();
    if (!file) return;
    const BUCKET = process.env.NEXT_PUBLIC_AWS_BUCKET as string;
    const params = {
      Bucket: BUCKET,
      Key: file?.name,
      Body: file,
    };
    console.log(params);

    try {
      const upload = s3.upload(params);
      setUpload(upload);
      upload.on("httpUploadProgress", (p) => {
        console.log(p.loaded / p.total);
        setProgress(p.loaded / p.total);
      });
      const result = await upload.promise();
      setFilePath(result?.Location);
      const doc = {
        name: docName,
        paperType,
        paperSize,
        orientation,
        printSides,
        color: false,
        pagesPerSheet,
        printingType: printType,
        bindingType: bidingType,
        description: extraDetails,
        file: filePath,
        createdBy: session?.data?.user?._id,
      };

      const res = await fetch("/api/document/upload", {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-type": "application/json;charset=UTF-8",
        },
        body: JSON.stringify(doc),
      });

      if (!res.ok) {
        throw new Error("Error placing command, try again");
      }
      const docResult = await res.json();

      console.log("doc result: ", docResult);
    } catch (err) {
      console.error(err);
    }
  };

  const handleCancel: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    if (!upload) return;
    upload.abort();
    // progress.set(0);
    setProgress(0);
    setUpload(null);
  };

  const dispatch = useDispatch();
  const router = useRouter();
  const fileObj: Command = {
    docName,
    numberOfCopies,
    paperType,
    paperSize,
    orientation,
    printSides,
    printColor,
    paperColor,
    pagesPerSheet,
    printType,
    biding,
    bidingType,
    extraDetails,
    cost,
  };
  const addFile = () => {
    dispatch(addfile(fileObj));
    setSaveState(true);
  };
  const handlePrint = () => {
    console.log("print commant: ", {
      name: docName,
      paperType,
      paperSize,
      orientation,
      printSides,
      paperColor,
      pagesPerSheet,
      printingType: printType,
      bindingType: bidingType,
      description: extraDetails,
      file: filePath,
      createdBy: session?.data?.user?._id,
    });
    // fetch("/api/document/upload", {
    //   method: "GET",
    //   mode: "no-cors",
    //   headers: {
    //     "Content-type": "application/json;charset=UTF-8",
    //   },
    //   body: JSON.stringify({
    //     name: docName,
    //     paperType,
    //     paperSize,
    //     orientation,
    //     printSides,
    //     paperColor,
    //     pagesPerSheet,
    //     printingType: printType,
    //     bindingType: bidingType,
    //     description: extraDetails,
    //     file: filePath,
    //     createdBy: session?.data?.user?._id,
    //   }),
    // });
  };
  return (
    <div>
      <div className="container mx-auto mt-[65px] gap-2 md:p-5">
        {saveState == false ? (
          <nav className="flex px-5 py-3 text-gray-700 border border-gray-200  rounded-lg bg-green-100">
            <p className="mx-auto">
              Tell us how you want your document to be printed by filling the
              form
            </p>
          </nav>
        ) : (
          <nav className="flex px-5 py-3 text-gray-700 border border-gray-200  rounded-lg bg-green-100">
            <p className="mx-auto">
              {commandList?.length}{" "}
              {commandList?.length == 1 ? "file" : "files"} uploaded
              Successfully, You can Add to add another file or{" "}
              <button
                onClick={handlePrint}
                className="p-2 border rounded-md bg-blue-500 text-white my-auto "
              >
                Proceed to Payment
              </button>
            </p>
          </nav>
        )}
        <div className="flex">
          <div className="w-full">
            <div className=" p-5 lg:rounded md:flex gap-2 ">
              <div className="mb-4 md:w-3/5 rounded-lg border  rounded md:px-8 pt-6 pb-8">
                <div className="mb-4 md:flex md:justify-between">
                  <div className="md:flex mb-4 md:mb-0 w-full gap-2">
                    <div className="w-full">
                      <label className="mb-2 block text-sm font-bold text-gray-700">
                        File Name
                      </label>
                      <input
                        className="border  w-full p-2 rounded-md"
                        type="text"
                        placeholder="Enter Document name"
                        onChange={(e) => setDocName(e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-md">
                  <div className="md:flex justify-between my-3 border-b-2 py-2 border-gray-300">
                    <label className="block my-auto mb-2 text-sm font-medium text-gray-900">
                      Number of Copies
                    </label>
                    <input
                      className="my-auto bg-gray-50 border border-gray-300 px-2 rounded-md py-2"
                      type="number"
                      onChange={(e: any) => setNumberOfCopies(e.target.value)}
                    />
                  </div>
                  <div className="md:flex justify-between my-3 border-b-2 py-2 border-gray-300">
                    <label className="block my-auto mb-2 text-sm font-medium text-gray-900">
                      Pages{" "}
                    </label>
                    <select className="my-auto bg-gray-50 border border-gray-300 px-2 rounded-md py-2">
                      <option value="Landscape">All</option>
                      <option value="Potrait">Some Pages</option>
                    </select>
                  </div>
                  <div className="md:flex justify-between my-3 py-2">
                    <label className="block my-auto mb-2 text-sm font-medium text-gray-900">
                      Paper Type
                    </label>
                    <select
                      onChange={(e: any) => setPaperType(e.target.value)}
                      className="my-auto bg-gray-50 border border-gray-300 px-2 rounded-md py-2 bg-gray-100"
                    >
                      <option value="normal">Normal</option>
                      <option value="Hard Page">Hard Page</option>
                    </select>
                  </div>
                  <div className="md:flex justify-between border-b-2 border-gray-300 my-3 py-2">
                    <label className="block my-auto mb-2 text-sm font-medium text-gray-900">
                      Paper color
                    </label>
                    <select
                      onChange={(e: any) => setPaperColor(e.target.value)}
                      className="my-auto bg-gray-50 border-gray-300 px-2 rounded-md py-2 bg-gray-100"
                    >
                      <option value="white">white</option>
                      <option value="Green">Green</option>
                      <option value="Red">Red</option>
                      <option value="Pink">Pink</option>
                    </select>
                  </div>

                  <div className="md:flex justify-between my-3 border-b-2 py-2 border-gray-300">
                    <label className="block my-auto mb-2 text-sm font-medium text-gray-900">
                      Paper Size
                    </label>
                    <select
                      onChange={(e) => setPaperSize(e.target.value)}
                      className="my-auto bg-gray-50 border border-gray-300 px-2 rounded-md py-2 bg-gray-100"
                    >
                      <option value="A4">A4</option>
                      <option value="A3">A3</option>
                      <option value="A5">A5</option>
                    </select>
                  </div>

                  <div className="md:flex justify-between my-3 border-b-2 py-2 border-gray-300">
                    <label className="block my-auto mb-2 text-sm font-medium text-gray-900">
                      Orientation
                    </label>
                    <div className="md:flex flex-row justify-between">
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          className="form-radio h-4 w-4 text-blue-600"
                          value="landscape"
                          name="orientation"
                          onChange={(e: any) => setOrientation(e.target.value)}
                        />
                        <span className="ml-2 pr-3">Landscape</span>
                      </label>
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          className="form-radio h-4 w-4 text-blue-600"
                          value="potrait"
                          onChange={(e: any) => setOrientation(e.target.value)}
                          name="orientation"
                        />
                        <span className="ml-2">Potrait</span>
                      </label>
                    </div>
                  </div>

                  <div className="flex justify-between my-3 border-b-2 py-2 border-gray-300">
                    <label className="block my-auto mb-2 text-sm font-medium text-gray-900">
                      Print Sides
                    </label>
                    <div className="flex flex-row justify-between">
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          className="form-radio h-4 w-4 text-blue-600"
                          value="Recto"
                          name="printSides"
                          onChange={(e) => setprintSides(e.target.value)}
                        />
                        <span className="ml-2 pr-3">Recto Recto</span>
                      </label>
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          className="form-radio h-4 w-4 text-blue-600"
                          name="printSides"
                          value="Recto Veso"
                          onChange={(e) => setprintSides(e.target.value)}
                        />
                        <span className="ml-2">Recto Veso</span>
                      </label>
                    </div>
                  </div>

                  <div className="flex justify-between my-3 border-b-2 py-2 border-gray-300">
                    <label className="block my-auto mb-2 text-sm font-medium text-gray-900">
                      Print Color
                    </label>
                    <div className="flex flex-row justify-between">
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          className="form-radio h-4 w-4 text-blue-600"
                          name="printColor"
                          value="color"
                          onChange={(e) => setPrintColor(e.target.value)}
                        />
                        <span className="ml-2 pr-3">Color</span>
                      </label>
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          className="form-radio h-4 w-4 text-blue-600"
                          value="black-and-white"
                          name="printColor"
                          onChange={(e) => setPrintColor(e.target.value)}
                        />
                        <span className="ml-2">Black & White</span>
                      </label>
                    </div>
                  </div>
                </div>

                <h3>Layout</h3>
                <div className="bg-white rounded-md p-4 my-2">
                  <div className="flex justify-between my-3 border-b-2 py-2 border-gray-300">
                    <label className="block my-auto mb-2 text-sm font-medium text-gray-900">
                      Pages per sheet
                    </label>
                    <select
                      onChange={(e) => setPagesPerSheet(e.target.value)}
                      className="my-auto bg-gray-50 border border-gray-300 px-2 rounded-md py-2 bg-gray-100"
                    >
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                    </select>
                  </div>

                  <div className="flex justify-between my-3 border-b-2 py-2 border-gray-300">
                    <label className="block my-auto mb-2 text-sm font-medium text-gray-900">
                      Layout Direction
                    </label>
                    <select className="my-auto bg-gray-50 border border-gray-300 px-2 rounded-md py-2 bg-gray-100">
                      <option value="A4">A4</option>
                      <option value="A3">A3</option>
                      <option value="A5">A5</option>
                    </select>
                  </div>
                  <div className="flex justify-between my-3 border-b-2 py-2 border-gray-300">
                    <label className="block my-auto mb-2 text-sm font-medium text-gray-900">
                      Margin
                    </label>
                    <select className="my-auto bg-gray-50 border border-gray-300 px-2 rounded-md py-2 bg-gray-100">
                      <option value="A4">A4</option>
                      <option value="A3">A3</option>
                      <option value="A5">A5</option>
                    </select>
                  </div>
                </div>

                <h3>Paper Handling</h3>
                <div className="bg-white rounded-md p-4 my-2">
                  <div className="flex justify-between my-3 border-b-2 py-2 border-gray-300">
                    <label className="block my-auto mb-2 text-sm font-medium text-gray-900">
                      Printing Type
                    </label>
                    <div className="flex flex-row justify-between">
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          className="form-radio h-4 w-4 text-blue-600"
                          value="Booklet"
                          name="printColor"
                          // checked={value === 'true'}
                          onChange={(e) => setPrintType(e.target.value)}
                        />
                        <span className="ml-2 pr-3">Booklet</span>
                      </label>
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          className="form-radio h-4 w-4 text-blue-600"
                          value="Plain"
                          name="printColor"
                          // checked={value === 'false'}
                          onChange={(e) => setPrintType(e.target.value)}
                        />
                        <span className="ml-2">Plain</span>
                      </label>
                    </div>
                  </div>

                  <div className="flex justify-between my-3 border-b-2 py-2 border-gray-300">
                    <label className="block my-auto mb-2 text-sm font-medium text-gray-900">
                      Binding
                    </label>
                    <div className="flex flex-row justify-between">
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          className="form-radio h-4 w-4 text-blue-600"
                          value="Yes"
                          name="binding"
                          // checked={value === 'true'}
                          onChange={(e) => setBiding(e.target.value)}
                        />
                        <span className="ml-2 pr-3">Yes</span>
                      </label>
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          className="form-radio h-4 w-4 text-blue-600"
                          value="false"
                          name="binding"
                          onChange={(e) => setBiding(e.target.value)}
                        />
                        <span className="ml-2">No</span>
                      </label>
                    </div>
                  </div>
                  <div className="flex justify-between my-3 border-b-2 py-2 border-gray-300">
                    <label className="block my-auto mb-2 text-sm font-medium text-gray-900">
                      Binding Type
                    </label>
                    <select
                      onClick={(e: any) => setBidingType(e.target.value)}
                      className="my-auto bg-gray-50 border border-gray-300 px-2 rounded-md py-2 bg-gray-100"
                    >
                      <option value="no binding">No binding</option>
                      <option value="spiral">Spiral</option>
                      <option value="pin">Pin</option>
                    </select>
                  </div>
                </div>
                <div className="mb-4">
                  <label className="mb-2 block text-sm font-bold text-gray-700">
                    Add Additional details
                  </label>
                  <p></p>
                  <textarea
                    cols={30}
                    rows={4}
                    placeholder="Explain any other additional printing information here... (please be detailed as posible)"
                    onChange={(e) => setExtraDetails(e.target.value)}
                    className="focus:shadow-outline mb-3 w-full appearance-none rounded border px-3 py-2 text-sm leading-tight text-gray-700 shadow focus:outline-none"
                  ></textarea>
                </div>
              </div>
              <div className="mb-4 md:w-2/5 rounded-lg border pt-6 pb-8">
                <label className="block mb-2 text-sm  font-medium text-gray-900 dark:text-white">
                  Upload file
                </label>
                <div className="bg-white overflow-y-scroll  w-full h-[600px] rounded-md">
                  {/* <PDFViewer />
                   */}

                  <PDFDisplay />
                </div>
                <input
                  type="file"
                  onChange={handleFileChange}
                  className="file-input file-input-ghost w-full my-auto mx-auto max-w-xs"
                />
                <div className="flex justify-between px-3">
                  <button
                    className="my-3 hover:text-blue-500"
                    onClick={handleUpload}
                  >
                    Replace file
                  </button>
                  <button my-3>
                    <BiTrash color="red" />
                  </button>
                </div>
                <div className="bg-white rounded-md p-4 my-2">
                  <div className="flex justify-between">
                    {" "}
                    <h3 className="font-bold">Summary</h3>
                  </div>
                  <div className="border-t-2 border-b-2  py-3">
                    <div className="flex justify-between">
                      <p>Document name:</p>
                      <p>My CV</p>
                    </div>

                    <div className="flex justify-between">
                      <p>Updated</p>
                      <p>My CV</p>
                    </div>

                    <div className="flex justify-between">
                      <p>Total Pages</p>
                      <p>My CV</p>
                    </div>

                    <div className="flex  justify-between">
                      <p className="font-bold">Total Cost</p>
                      <p className="font-bold">5000 frs</p>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between py-2">
                      <p className="my-auto">Document name:</p>
                      <button
                        onClick={addFile}
                        className="p-2 border rounded-md bg-blue-500 text-white my-auto "
                      >
                        Add File
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
