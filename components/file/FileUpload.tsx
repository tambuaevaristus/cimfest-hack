import { Viewer, Worker } from "@react-pdf-viewer/core";
import { PDFDocument } from "pdf-lib";
import React, { useState } from "react";
import { pageNavigationPlugin } from "@react-pdf-viewer/page-navigation";

export default function FileUpload() {
  const pageNavigationPluginInstance = pageNavigationPlugin();
  const {CurrentPageLabel } = pageNavigationPluginInstance;

  const [numPages, setNumPages] = useState(null);

  const [url, setUrl] = React.useState("");
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    files?.length > 0 && setUrl(URL.createObjectURL(files[0]));

    console.log("na the page this ===>", numPages);
  };

  return (
    <div>
    <div  className="bg-gray-400 h-10 p-2" >
    <input type="file" accept=".pdf" onChange={onChange} />
      <CurrentPageLabel>
                {(props: RenderCurrentPageLabelProps) => (
                    <span>{`${props.currentPage + 1} of ${props.numberOfPages}`}</span>
                )}
            </CurrentPageLabel>
    </div>
      <div style={{ height: "750px" }}>
        {url ? (
          <div
            style={{
              border: "1px solid rgba(0, 0, 0, 0.3)",
              height: "100%",
            }}
          >
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
