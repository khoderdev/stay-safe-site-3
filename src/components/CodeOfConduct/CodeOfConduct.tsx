// import React from 'react';
// import './styles.css';
// import {
//   coa1,
//   coa2,
//   coa3,
//   coa4,
//   coa5,
//   coa6,
//   coa7,
//   coa8,
//   coa9,
//   coa10,
//   coa11,
//   coa12,
//   coa13,
//   coa14,
//   coa15,
//   coa16,
//   coa17,
//   coa18,
//   coa19,
//   coa20,
//   coa21,
//   coa22,
// } from './Images';

// function CodeOfConduct() {
//   return (
//     <div>
//       <section className='section 0 text-right font-bold text-5xl md:text-8xl mb-6 flex justify-end p-8'>
//         Code of Conduct <br />and Ethics
//       </section>

//       <section className='section 1'>
//         <img src={coa1} alt='Code of Conduct 1' />
//       </section>
//       <section className='section 2'>
//         <img src={coa2} alt='Code of Conduct 2' />
//       </section>
//       <section className='section 3'>
//         <img src={coa3} alt='Code of Conduct 3' />
//       </section>
//       <section className='section 4'>
//         <img src={coa4} alt='Code of Conduct 4' />
//       </section>
//       <section className='section 5'>
//         <img src={coa5} alt='Code of Conduct 5' />
//       </section>
//       <section className='section 6'>
//         <img src={coa6} alt='Code of Conduct 6' />
//       </section>
//       <section className='section 7'>
//         <img src={coa7} alt='Code of Conduct 7' />
//       </section>
//       <section className='section 8'>
//         <img src={coa8} alt='Code of Conduct 8' />
//       </section>
//       <section className='section 9'>
//         <img src={coa9} alt='Code of Conduct 9' />
//       </section>
//       <section className='section 10'>
//         <img src={coa10} alt='Code of Conduct 10' />
//       </section>
//       <section className='section 11'>
//         <img src={coa11} alt='Code of Conduct 11' />
//       </section>
//       <section className='section 12'>
//         <img src={coa12} alt='Code of Conduct 12' />
//       </section>
//       <section className='section 13'>
//         <img src={coa13} alt='Code of Conduct 13' />
//       </section>
//       <section className='section 14'>
//         <img src={coa14} alt='Code of Conduct 14' />
//       </section>
//       <section className='section 15'>
//         <img src={coa15} alt='Code of Conduct 15' />
//       </section>
//       <section className='section 16'>
//         <img src={coa16} alt='Code of Conduct 16' />
//       </section>
//       <section className='section 17'>
//         <img src={coa17} alt='Code of Conduct 17' />
//       </section>
//       <section className='section 18'>
//         <img src={coa18} alt='Code of Conduct 18' />
//       </section>
//       <section className='section 19'>
//         <img src={coa19} alt='Code of Conduct 19' />
//       </section>
//       <section className='section 20'>
//         <img src={coa20} alt='Code of Conduct 20' />
//       </section>
//       <section className='section 21'>
//         <img src={coa21} alt='Code of Conduct 21' />
//       </section>
//       <section className='section 22'>
//         <img src={coa22} alt='Code of Conduct 22' />
//       </section>
//     </div>
//   );
// }

// export default CodeOfConduct;

// ////////////////////////////////////////////
// ////////////////////////////////////////////
// ////////////////////////////////////////////
// ////////////////////////////////////////////

import React from 'react';
import './styles.css';
import {
  coa1,
  coa2,
  coa3,
  coa4,
  coa5,
  coa6,
  coa7,
  coa8,
  coa9,
  coa10,
  coa11,
  coa12,
  coa13,
  coa14,
  coa15,
  coa16,
  coa17,
  coa18,
  coa19,
  coa20,
  coa21,
  coa22,
  vision
} from './images';

function CodeOfConduct() {
  return (
    <div className='p-8'>
      <div>
        <p className='font-bold text-5xl md:text-8xl mb-6'>Stay Safe <br /></p>
        <p className='font-semibold text-2xl md:text-5xl'>
          Stay Safe Public Health Organization initiated on behalf of our beloved angel Adonai Akram Al Awar, aims at providing public health services as an essential condition for sustainable development in Lebanon and other countries.</p>
      </div>

      <div className='w-full flex justify-between mt-16'>
        <div className='w-full flex flex-col justify-between py-10'>
          <div>
            <p className='font-bold text-5xl md:text-8xl mb-6'>Vision <br /></p>
            <p className='font-semibold text-2xl md:text-5xl'>
              Lead in public health solutions & education with local impact and global significance.
            </p>
          </div>
          <div>
            <p className='font-bold text-5xl md:text-8xl mb-6'>Mission <br /></p>
            <p className='font-semibold text-2xl md:text-5xl'>
              Stay Safe promotes public health & ensures safety for all.
            </p>
          </div>
        </div>
        <div className='w-full'>
          <img src={vision} alt='vision' />
        </div>
      </div>





      {[coa1, coa2, coa3, coa4, coa5, coa6, coa7, coa8, coa9, coa10, coa11, coa12, coa13, coa14, coa15, coa16, coa17, coa18, coa19, coa20, coa21, coa22].map((image, index) => (
        <section key={index} className={`section ${index + 1}`}>
          <div className='image-container'>
            <img src={image} alt={`Code of Conduct ${index + 1}`} className='responsive-image' />
          </div>
        </section>
      ))}
    </div>
  );
}

export default CodeOfConduct;

// ////////////////////////////////////////////
// ////////////////////////////////////////////
// ////////////////////////////////////////////
// ////////////////////////////////////////////

