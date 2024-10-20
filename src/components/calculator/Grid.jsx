// import React from 'react';
// import './calculator.css';

// const Grid = ({ messages }) => {
//   return (
//     <div className="grid-container">
//       {messages
//         .filter(message => message && message.trim() !== '') // Filter out empty messages
//         .map((message, index) => (
//           <div key={index} className="grid-item">
//             {message}
//           </div>
//         ))}
//     </div>
//   );
// };

// export default Grid;
// ///////////////////////////////////////////
// ///////////////////////////////////////////
// ///////////////////////////////////////////


// import React from 'react';
// import './calculator.css';

// const Grid = ({ messages }) => {
//   return (
//     <div className="grid-container">
//       {messages
//         .filter(message => message && message.trim() !== '') // Filter out empty messages
//         .map((message, index) => (
//           <div key={index} className="grid-item">
//             {message}
//           </div>
//         ))}
//     </div>
//   );
// };

// export default Grid;


// ///////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////


import React from 'react';
import './calculator.css';

const Grid = ({ title, messages }) => {
  return (
    <div className="grid-section">
      <div className="grid-title">{title}</div>
      <div className="grid-container">
        {messages
          .filter(message => message && message.trim() !== '') // Filter out empty messages
          .map((message, index) => (
            <div key={index} className="grid-item">
              {message}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Grid;
