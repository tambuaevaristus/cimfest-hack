
import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';

const PDFDisplay = (props) => {
    const [numPages, setNumPages] = useState(null);
  
    const onDocumentLoadSuccess = ({ numPages }) => {
      setNumPages(numPages);
    };
  
    return (
      <Document
        file={pdfFile}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page  />
      </Document>
    );
  };

const pdfFile ="https://jeeadv.ac.in/past_qps/2017_1.pdf"
;

export default PDFDisplay;