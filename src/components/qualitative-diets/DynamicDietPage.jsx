// // DynamicDietPage.js
// import React from 'react';
// import { useParams } from 'react-router-dom';
// import { dietsData } from './dietsData';

// const DynamicDietPage = () => {
//   const { dietName } = useParams();
//   const diet = dietsData[dietName] || { title: "Not Found", content: "No data available." };

//   return (
//     <div className="diet-page">
//       <h1>{diet.title}</h1>
//       <p>{diet.content}</p>
//     </div>
//   );
// };

// export default DynamicDietPage;
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { dietsData } from './dietsData';

const DynamicDietPage = () => {
  const { dietName } = useParams();
  const [diet, setDiet] = useState({ title: "Not Found", content: "No data available." });

  // Update the diet data whenever the dietName param changes
  useEffect(() => {
    const newDiet = dietsData[dietName] || { title: "Not Found", content: "No data available." };
    setDiet(newDiet);
  }, [dietName]);

  return (
    <div className="diet-page">
      <h1>{diet.title}</h1>
      <p>{diet.content}</p>
    </div>
  );
};

export default DynamicDietPage;
