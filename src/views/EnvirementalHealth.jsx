// import PrevelenceCircle from "../components/circle/PrevelenceCircle"

// function EnvirementalHealth() {
//   return (
//     <div className="mt-10 space-y-10 !bg-black">

//       <div className=" flex flex-col ">
//         <PrevelenceCircle />
//       </div>

//       <div className=" flex flex-col  ">
//         <PrevelenceCircle />
//       </div>

//       <div className="  flex flex-col">
//         <PrevelenceCircle />
//       </div>

//       <div className=" flex flex-col ">
//         <PrevelenceCircle />
//       </div>
//     </div>
//   )
// }
// export default EnvirementalHealth



import React from 'react';
import { ScrollRotate } from 'react-scroll-rotate';

const RotateImage = ({ src, alt }) => {
  return (
    <div>
      <ScrollRotate
        from={0}
        to={360}
        loops={2}
        method="perc"
        animationDuration={0.3}
      >
        <img
          src={src}
          alt={alt}
          style={{
            width: '300px',
            height: '300px',
            // position: 'fixed',
            // top: '50%',
            // left: '50%',
            // transform: 'translate(-50%, -50%)'
          }}
        />
      </ScrollRotate>
      <div style={{ position: 'absolute', top: '10%', left: '50%', transform: 'translateX(-50%)' }}>
        <h1>Scroll Down to Rotate the Image!</h1>
      </div>
    </div>
  );
};

export default RotateImage;
