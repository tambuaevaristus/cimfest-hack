import { Viewer, Worker } from "@react-pdf-viewer/core";
import React, { useRef, useState } from "react";
import { pageNavigationPlugin } from "@react-pdf-viewer/page-navigation";

export default function FileUpload() {
  const pageNavigationPluginInstance = pageNavigationPlugin();
  const { CurrentPageLabel } = pageNavigationPluginInstance;
  const pageNumRef: any = useRef();
  const [numPages, setNumPages] = useState("");
  const [url, setUrl] = React.useState("");
  const onChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files: FileList = e?.target?.files;
    files.length > 0 && setUrl(URL.createObjectURL(files[0]));
  };
 
  return (
    <div>
      <div className="bg-gray-400 h-10 p-2  w- z-20">
        <input type="file" accept=".pdf" onChange={onChange} />
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
