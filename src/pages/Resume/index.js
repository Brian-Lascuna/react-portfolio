// Resume page HTML
import React, { useEffect, useState } from "react";
import { Page, Document, pdfjs } from "react-pdf";
import pdfFile from "../../assets/Brian_Lascuna_Resume.pdf";
//import './resume.css';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.js',
    import.meta.url,
  ).toString();

const Resume = () => {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentSuccess({numPages}) {
        setNumPages(numPages);
    }

    return (
        <React.Fragment>
            <div className="flex flex-col items-center resume-container">
                <Document file={pdfFile} onLoadSuccess={onDocumentSuccess}>
                    <Page pageNumber={pageNumber} renderTextLayer={false} renderAnnotationLayer={false} customTextRenderer={false} />
                </Document>
                <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                    <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
                    <span>Download</span>
                </button>
            </div>
        </React.Fragment>
    )
}

export default Resume;