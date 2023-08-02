import { useEffect, useRef } from "react";

const PDFViewer: React.FC = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const url = "https://jeeadv.ac.in/past_qps/2017_1.pdf"; // Replace with the actual URL of the PDF

    const proxyUrl = "https://jeeadv.ac.in/past_qps/2017_1.pdf";

    if (iframeRef.current) {
      iframeRef.current.src = proxyUrl;
    }
  }, []);

  return (
    <div>
      <iframe ref={iframeRef} width="100%" height="600px" title="PDF Viewer" />
    </div>
  );
};

export default PDFViewer;
