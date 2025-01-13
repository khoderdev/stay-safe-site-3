// import React, { useEffect, useState } from 'react';

// const RenderExternalHTML = () => {
//   const [htmlContent, setHtmlContent] = useState('');
//   const [error, setError] = useState(false);

//   useEffect(() => {
//     fetch('/coa/index.html')
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error(`Error fetching HTML file: ${response.statusText}`);
//         }
//         return response.text();
//       })
//       .then((html) => setHtmlContent(html))
//       .catch((error) => {
//         console.error('Error loading external HTML:', error);
//         setError(true);
//       });
//   }, []);

//   if (error) {
//     return <div>Error loading content. Please try again later.</div>;
//   }

//   if (!htmlContent) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div
//       className="external-html-container"
//       dangerouslySetInnerHTML={{ __html: htmlContent }}
//     />
//   );
// };


// export default RenderExternalHTML;
