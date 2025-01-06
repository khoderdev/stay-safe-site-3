// import React from 'react'
// import CircularText from '../components/hero/CircularText'

// function Test() {

//   return (
//     <div className='border container mx-auto h-screen  p-4'>
//       <div className='
//       '>
//         <CircularText />
//         <div className='border rounded-full  place-self-center flex justify-center items-center p-2
//         xsm:w-32 xsm:h-32 
//         sm:w-44 sm:h-44
//         md:w-52 md:h-52
//         lg:w-80 lg:h-80
//         xl:w-64 xl:h-64
//         2xl:w-72 2xl:h-72
//         3xl:w-76 3xl:h-76

//         bg-black'>
//           <img
//             src="/white-logo-anim.gif"
//             alt="StaySafe Logo"
//             loading="lazy"
//             className="absolute ml-4 mt-4 lg:ml-8 lg:mt-8 
//           xsm:w-[150px]
//           sm:w-[200px]
//           md:w-[250px]
//           lg:w-[378px]
//           xl:w-[340px]
//           "
//           />
//         </div>
//       </div>



//     </div>
//   )
// }

// export default Test

import React from 'react'

function Test() {
  return (
    <div className='container mx-auto border h-screen p-4 flex items-start justify-center'>
      <div className='relative border rounded-full flex justify-center items-center
        bg-black
        w-32 h-32
        sm:w-44 sm:h-44
        md:w-52 md:h-52
        lg:w-80 lg:h-80
        xl:w-96 xl:h-96
       '>
        <img
          src="/white-logo-anim.gif"
          alt="StaySafe Logo"
          loading="lazy"
          className="absolute ml-4 mt-4 lg:ml-8 lg:mt-8
            xsm:w-[150px]
            sm:w-[200px]
            md:w-[250px]
            lg:w-[378px]
            xl:w-[340px]

          "
        />
      </div>
    </div>
  )
}

export default Test

