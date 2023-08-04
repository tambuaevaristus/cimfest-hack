import { Viewer, Worker } from "@react-pdf-viewer/core";
import React, { useRef, useState } from "react";
import { pageNavigationPlugin } from "@react-pdf-viewer/page-navigation";

export default function FileUpload({url}: any) {
  const pageNavigationPluginInstance = pageNavigationPlugin();



  return (
    <div>
      <div>
        {url ? (
          <div>
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
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
