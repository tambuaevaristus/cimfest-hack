import { Viewer, Worker } from "@react-pdf-viewer/core";
import { PDFDocument } from "pdf-lib";
import React, { useRef, useState } from "react";
import { pageNavigationPlugin } from "@react-pdf-viewer/page-navigation";

export default function FileUpload() {
  const pageNavigationPluginInstance = pageNavigationPlugin();
  const { CurrentPageLabel } = pageNavigationPluginInstance;
  const pageNumRef: any = useRef();

  const [numPages, setNumPages] = useState("");

  const [url, setUrl] = React.useState("");
  // const handleDivClick = () => {
  //   const span = document.getElementById("my-span");
  //   setNumPages(span?.innerHTML);
  //   console.log("Span content", span);
  //   // console.log("we are in ")
  //   console.log("page number ==>", pageNavigationPluginInstance.NumberOfPages);
  // };

  const onChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files: FileList = e?.target?.files;
    // files.length > 0 && setUrl(URL.createObjectURL(files[0]));

    const numPages = await getNumPages(files[0]);


    console.log("Number of pages ===>", numPages.length);
    // handleDivClick();
  };
  // setNumPages(pageNumRef.current)

  const readFile = (file: any) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);

      reader.readAsArrayBuffer(file);
    });
  };

  const getNumPages = async (file: any) => {
    const arrayBuffer = await readFile(file);

    const pdf = await PDFDocument.load(arrayBuffer);

    return pdf.getPages();
  };
  return (
    <div>
      <div className="bg-gray-400 h-10 p-2  w- z-20">
        <input type="file" accept=".pdf" onChange={onChange} />
        <CurrentPageLabel>
          {(props: any) => (
            <span>
              {`${props.currentPage + 1} of`}{" "}
              <span
                ref={pageNumRef}
                id="my-span"
                // onClick={handleDivClick}
              >{`${props.numberOfPages}`}</span>
            </span>
          )}
        </CurrentPageLabel>
      </div>
      <div>
        {url ? (
          <div>
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.7.107/build/pdf.worker.min.js">
              <Viewer fileUrl={url} plugins={[pageNavigationPluginInstance]} />
            </Worker>
          </div>
        ) : (
          <div
            style={{
              alignItems: "center",
              border: "2px dashed rgba(0, 0, 0, .3)",
              display: "flex",
              fontSize: "2rem",
              height: "100%",
              justifyContent: "center",
              width: "100%",
            }}
          >
            Preview area
          </div>
        )}
      </div>
    </div>
  );
}
