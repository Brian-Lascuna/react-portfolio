// Resume page HTML
import React, { useEffect, useState } from "react";
import { Page, Document, pdfjs } from "react-pdf";
import pdfFile from "../../assets/Brian_Lascuna_Resume.pdf";
import './resume.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const Resume = () => {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentSuccess({numPages}) {
        setNumPages(numPages);
    }

    function changePage(offSet) {
        setPageNumber(prevPageNumber => prevPageNumber + offSet);
    }

    function changePageBack() {
        changePage(-1);
    }

    function changePageNext() {
        changePage(+1);
    }

    function getWindowWidth() {
        const { innerWidth: width, innerHeight: height } = window;
        return width; 
    }

    return (
        <React.Fragment>
            <div className="flex flex-col items-center resume-container">
                {getWindowWidth() >= 468 ? (
                    <Document file={pdfFile} onLoadSuccess={onDocumentSuccess}>
                        <Page pageNumber={pageNumber} renderTextLayer={false} renderAnnotationLayer={false} customTextRenderer={false} />
                    </Document>
                ) : (
                    <Document file={pdfFile} onLoadSuccess={onDocumentSuccess}>
                        <Page pageNumber={pageNumber} width="300" renderTextLayer={false} renderAnnotationLayer={false} customTextRenderer={false} />
                    </Document>
                )}
                <p>Page: {pageNumber} of {numPages}</p>
                {pageNumber == 1 && 
                    <div class="inline-flex">
                        <button onClick={changePageBack} class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l" disabled>
                        Prev
                        </button>
                        <button onClick={changePageNext} class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r">
                        Next
                        </button>
                  </div>
                }
                {pageNumber == numPages && 
                    <div class="inline-flex">
                        <button onClick={changePageBack} class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l">
                        Prev
                        </button>
                        <button onClick={changePageNext} class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r" disabled>
                        Next
                        </button>
                  </div>
                }
                <a href={pdfFile} download="Brian_Lascuna_Resume.pdf" target="_blank" rel="noreferrer">
                    <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                        <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
                        <span>Download</span>
                    </button>
                </a>
            </div>
        </React.Fragment>
    )
}

export default Resume;