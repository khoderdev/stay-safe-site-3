// import { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { dietsData } from './dietsData';

// const DynamicDietPage = () => {
//   const { dietName } = useParams();
//   const [diet, setDiet] = useState({ title: "Not Found", content: "No data available." });

//   useEffect(() => {
//     const newDiet = dietsData[dietName] || { title: "Not Found", content: "No data available." };
//     setDiet(newDiet);
//   }, [dietName]);

//   return (
//     <div className="diet-page">
//       <h1>{diet.title}</h1>
//       <p>{diet.content}</p>
//     </div>
//   );
// };
// export default DynamicDietPage;

// import { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { dietsData } from './dietsData';
// import PDFViewer from 'pdf-viewer-reactjs';

// const DynamicDietPage = () => {
//   const { dietName } = useParams();
//   const [diet, setDiet] = useState({ title: "Not Found", content: "No data available." });
//   const [pdfFile, setPdfFile] = useState(null);
//   const [pdfUrl, setPdfUrl] = useState(null);

//   useEffect(() => {
//     const newDiet = dietsData[dietName] || { title: "Not Found", content: "No data available." };
//     setDiet(newDiet);
//   }, [dietName]);

//   const handleFileUpload = (event) => {
//     const file = event.target.files[0];
//     if (file && file.type === "application/pdf") {
//       setPdfFile(file);
//       setPdfUrl(URL.createObjectURL(file));
//     } else {
//       alert("Please upload a valid PDF file.");
//     }
//   };

//   return (
//     <div className="diet-page">
//       <h1 className='text-2xl text-center dark:text-white p-4'>{diet.title}</h1>
//       <p>{diet.content}</p>
//       {/* File Upload Section */}
//       <input type="file" accept="application/pdf" onChange={handleFileUpload} />
//       {/* PDF Viewer */}
//       {pdfUrl && (
//         <div className="pdf-viewer">
//           <PDFViewer document={{ url: pdfUrl }} scale={1.2} />
//         </div>
//       )}
//     </div>
//   );
// };

// export default DynamicDietPage;


import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Document, Page, pdfjs } from 'react-pdf';
import { dietsData } from './dietsData';

// Set the workerSrc to the correct path
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const DynamicDietPage = () => {
  const { dietName } = useParams();
  const [diet, setDiet] = useState({ title: "Not Found", content: "No data available." });
  const [pdfFile, setPdfFile] = useState(null);
  const [numPages, setNumPages] = useState(null);

  useEffect(() => {
    const newDiet = dietsData[dietName] || { title: "Not Found", content: "No data available." };
    setDiet(newDiet);
  }, [dietName]);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file && file.type === "application/pdf") {
      setPdfFile(file);
    } else {
      alert("Please upload a valid PDF file.");
    }
  };

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <div className="diet-page">
      <h1>{diet.title}</h1>
      <p>{diet.content}</p>

      {/* File Upload Section */}
      <input type="file" accept="application/pdf" onChange={handleFileUpload} />

      {/* PDF Viewer */}
      {pdfFile && (
        <div className="pdf-viewer">
          <Document
            file={pdfFile}
            onLoadSuccess={onDocumentLoadSuccess}
          >
            {Array.from(new Array(numPages), (el, index) => (
              <Page key={`page_${index + 1}`} pageNumber={index + 1} />
            ))}
          </Document>
        </div>
      )}
    </div>
  );
};

export default DynamicDietPage;
