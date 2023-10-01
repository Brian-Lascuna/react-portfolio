// Resume page HTML
import React from "react";
import { Page, Document, pdfjs } from "react-pdf";
//import './resume.css';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.js',
    import.meta.url,
  ).toString();

const Resume = () => {
    return (
        <React.Fragment>
            <div>
                <Document file="https://drive.google.com/file/d/1Vg3daQfFABmPkS_tTgphfu61L1GLMlnm/view?usp=sharing">
                    <Page pageNumber={1} />
                </Document>
            </div>
        </React.Fragment>
    )
}

export default Resume;