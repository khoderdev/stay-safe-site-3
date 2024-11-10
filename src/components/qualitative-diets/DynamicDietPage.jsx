// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { Pages } from "./Pages";
// import { Accordion, Icon } from "semantic-ui-react";
// import { uploadPdf, getPdfs } from "../../services/api";
// import { useAuth } from "../../hooks/useAuth";

// const DynamicDietPage = () => {
//   const { dietName } = useParams();
//   const [diet, setDiet] = useState({ title: "Not Found", content: "No data available." });
//   const [pdfFiles, setPdfFiles] = useState([]);
//   const [activeIndex, setActiveIndex] = useState(null);
//   const { token } = useAuth();

//   useEffect(() => {
//     const newDiet = Pages[dietName] || { title: "Not Found", content: "No data available." };
//     setDiet(newDiet);
//   }, [dietName]);

//   useEffect(() => {
//     const fetchPdfs = async () => {
//       try {
//         const response = await getPdfs(token);
//         setPdfFiles(response.data.data || []);
//       } catch (error) {
//         console.error("Failed to fetch PDFs", error);
//       }
//     };
//     fetchPdfs();
//   }, [token]);

//   const handleFileUpload = async (event) => {
//     const file = event.target.files[0];
//     if (file && file.type === "application/pdf") {
//       const formData = new FormData();
//       formData.append("pdf", file);
//       formData.append("title", file.name);

//       try {
//         await uploadPdf(formData, token);
//         alert("File uploaded successfully");

//         // Re-fetch the list of PDFs after upload
//         const response = await getPdfs(token);
//         setPdfFiles(response.data.data || []);
//       } catch (error) {
//         console.error("File upload failed", error);
//       }
//     } else {
//       alert("Please upload a valid PDF file.");
//     }
//   };

//   const handleAccordionClick = (index) => {
//     setActiveIndex(activeIndex === index ? null : index);
//   };

//   return (
//     <div className="flex p-8 justify-evenly">
//       <div className="">
//         <h1>{diet.title}</h1>
//         {/* <p>{diet.content}</p> */}

//         {/* File Upload Section */}
//         <input type="file" accept="application/pdf" onChange={handleFileUpload} />
//       </div>

//       {/* PDF Files List in Accordion */}
//       <div className="w-1/2">
//         <Accordion styled fluid>
//           {pdfFiles.map((file, index) => (
//             <div key={file.id || index}>
//               <Accordion.Title
//                 active={activeIndex === index}
//                 onClick={() => handleAccordionClick(index)}
//                 style={{ cursor: "pointer", fontWeight: "bold" }}
//               >
//                 <Icon name="dropdown" />
//                 {file.title || file.name}
//               </Accordion.Title>
//               <Accordion.Content active={activeIndex === index}>
//                 <p>{file.title || file.name}</p>
//                 {/* Construct the full URL to access the PDF file using 'filename' */}
//                 <a href={`http://localhost:8800/files/qualitative-diet/${file.filename}`} target="_blank" rel="noopener noreferrer">
//                   View PDF
//                 </a>

//               </Accordion.Content>

//             </div>
//           ))}
//         </Accordion>
//       </div>
//     </div>
//   );
// };

// export default DynamicDietPage;



// ///////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Pages } from "./Pages";
import { Accordion, Icon } from "semantic-ui-react";
import { uploadPdf, getPdfs } from "../../services/api";
import { useAuth } from "../../hooks/useAuth";

const DynamicDietPage = () => {
  const { dietName } = useParams();
  const [diet, setDiet] = useState({ title: "Not Found", content: "No data available." });
  const [pdfFiles, setPdfFiles] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null);
  const { token } = useAuth();

  useEffect(() => {
    const newDiet = Pages[dietName] || { title: "Not Found", content: "No data available." };
    setDiet(newDiet);
  }, [dietName]);

  useEffect(() => {
    const fetchPdfs = async () => {
      try {
        const response = await getPdfs(token, dietName); // Pass dietName to fetch only relevant PDFs
        setPdfFiles(response.data.data || []);
      } catch (error) {
        console.error("Failed to fetch PDFs", error);
      }
    };
    fetchPdfs();
  }, [token, dietName]);

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    if (file && file.type === "application/pdf") {
      const formData = new FormData();
      formData.append("pdf", file);
      formData.append("title", file.name);
      formData.append("dietName", dietName); // Attach diet name for server to associate the file

      try {
        await uploadPdf(formData, token, dietName);
        alert("File uploaded successfully");

        // Re-fetch the list of PDFs after upload
        const response = await getPdfs(token, dietName);
        setPdfFiles(response.data.data || []);
      } catch (error) {
        console.error("File upload failed", error);
      }
    } else {
      alert("Please upload a valid PDF file.");
    }
  };

  const handleAccordionClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="flex p-8 justify-evenly">
      <div>
        <h1>{diet.title}</h1>

        {/* File Upload Section */}
        <input type="file" accept="application/pdf" onChange={handleFileUpload} />
      </div>

      {/* PDF Files List in Accordion */}
      <div className="w-1/2">
        <Accordion styled fluid>
          {pdfFiles.map((file, index) => (
            <div key={file.id || index}>
              <Accordion.Title
                active={activeIndex === index}
                onClick={() => handleAccordionClick(index)}
                style={{ cursor: "pointer", fontWeight: "bold" }}
              >
                <Icon name="dropdown" />
                {file.title || file.name}
              </Accordion.Title>
              <Accordion.Content active={activeIndex === index}>
                <p>{file.title || file.name}</p>
                {/* Construct the full URL to access the PDF file using 'filename' */}
                <a href={`http://localhost:8800/files/qualitative-diet/${dietName}/${file.filename}`} target="_blank" rel="noopener noreferrer">
                  View PDF
                </a>
              </Accordion.Content>
            </div>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default DynamicDietPage;
