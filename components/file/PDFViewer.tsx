import React, { useState } from "react";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { printPlugin } from "@react-pdf-viewer/print";
import "@react-pdf-viewer/print/lib/styles/index.css";
import { PrintIcon } from "@react-pdf-viewer/print";
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";

export default function PDFViewer() {
  const [pdfFile, setPDFFile] = useState(null);
  const [viewPdf, setViewPdf] = useState(null);
  const fileType = ["application/pdf"];


  

  const newPlugin = defaultLayoutPlugin();

  return (
    <div className="container">
      {/* <form onSubmit=>
        <input type="file" onChange={handleChange} />
        <button type="submit">View file</button>
      </form> */}
      <div className="bg-red-300">
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.15.349/build/pdf.worker.min.js">
          <>
            <Viewer fileUrl="/test.pdf" plugins={[newPlugin]} />
          </>
        </Worker>
      </div>
    </div>
  );
}
