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
          >
            Preview Area Here
          </div>
        )}
      </div>
    </div>
  );
}
