// import React from 'react';
// import HTMLFlipBook from 'react-pageflip';

// const PageCover = React.forwardRef((props, ref) => {
// 	return (
// 		<div className='page page-cover' ref={ref} data-density='hard'>
// 			<div className='page-content'>
// 				<h2>{props.children}</h2>
// 			</div>
// 		</div>
// 	);
// });

// const Page = React.forwardRef((props, ref) => {
// 	return (
// 		<div className='page' ref={ref}>
// 			<div className='page-content'>
// 				<h2 className='page-header'>Page header - {props.number}</h2>
// 				<div className='page-image'></div>
// 				<div className='page-text'>{props.children}</div>
// 				<div className='page-footer'>{props.number + 1}</div>
// 			</div>
// 		</div>
// 	);
// });

// class DemoBook extends React.Component {
// 	constructor(props) {
// 		super(props);

// 		this.state = {
// 			page: 0,
// 			totalPage: 0,
// 		};

// 		// Create a reference for the FlipBook
// 		this.flipBook = React.createRef();
// 	}

// 	nextButtonClick = () => {
// 		if (this.flipBook.current) {
// 			this.flipBook.current.flipNext();
// 		}
// 	};

// 	prevButtonClick = () => {
// 		if (this.flipBook.current) {
// 			this.flipBook.current.flipPrev();
// 		}
// 	};

// 	onPage = (e) => {
// 		this.setState({
// 			page: e.data,
// 		});
// 	};

// 	handleOnInit = () => {
// 		if (this.flipBook.current) {
// 			this.setState({
// 				totalPage: this.flipBook.current.pageFlip().getPageCount(),
// 			});
// 		}
// 	};

// 	render() {
// 		return (
// 			<div>
// 				<HTMLFlipBook
// 					width={550}
// 					height={733}
// 					size='stretch'
// 					minWidth={315}
// 					maxWidth={1000}
// 					minHeight={400}
// 					maxHeight={1533}
// 					maxShadowOpacity={0.5}
// 					showCover={true}
// 					mobileScrollSupport={true}
// 					onFlip={this.onPage}
// 					onInit={this.handleOnInit}
// 					className='demo-book bg-pink'
// 					ref={this.flipBook}
// 				>
// 					<PageCover>BOOK TITLE</PageCover>
// 					<Page number={1}>Lorem ipsum...</Page>
// 					<Page number={2}>Lorem ipsum...</Page>

// 					<PageCover>THE END</PageCover>
// 				</HTMLFlipBook>
// 			</div>
// 		);
// 	}
// }

// export default DemoBook;
// import React, { useEffect, useRef, useState, useCallback } from 'react';
// import HTMLFlipBook from 'react-pageflip';
// import './DemoBook.scss';

// const DemoBook = () => {
//   const flipBookRef = useRef(null); // Reference to the FlipBook container
//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(0);
//   const [bookState, setBookState] = useState('read');
//   const [orientation, setOrientation] = useState('landscape');

//   // Handler for page flip event
//   const onFlip = useCallback((e) => {
//     setCurrentPage(e.data + 1); // Adjusting page number to start at 1
//   }, []);

//   // Handler for orientation change event
//   const onChangeOrientation = (e) => {
//     setOrientation(e.data);
//   };

//   // Handler for book state change
//   const onChangeState = (e) => {
//     setBookState(e.data);
//   };

//   // This ref can be used for manual page flipping controls
//   const handlePrevPage = () => {
//     if (flipBookRef.current) {
//       flipBookRef.current.pageFlip().flipPrev();
//     }
//   };

//   const handleNextPage = () => {
//     if (flipBookRef.current) {
//       flipBookRef.current.pageFlip().flipNext();
//     }
//   };

//   return (
//     <div className="container">
//       <div>
//         <button type="button" className="btn-prev" onClick={handlePrevPage}>
//           Previous page
//         </button>
//         <span className="page-current">{currentPage}</span> of{' '}
//         <span className="page-total">{totalPages}</span>
//         <button type="button" className="btn-next" onClick={handleNextPage}>
//           Next page
//         </button>
//       </div>

//       <div>
//         State: <i className="page-state">{bookState}</i>, orientation:{' '}
//         <i className="page-orientation">{orientation}</i>
//       </div>

//       <HTMLFlipBook
//         ref={flipBookRef}
//         width={550}
//         height={733}
//         size="stretch"
//         minWidth={315}
//         maxWidth={1000}
//         minHeight={420}
//         maxHeight={1350}
//         maxShadowOpacity={0.5}
//         showCover={true}
//         mobileScrollSupport={false}
//         onFlip={onFlip}
//         onChangeOrientation={onChangeOrientation}
//         onChangeState={onChangeState}
//         onInit={({ page, mode }) => {
//           setTotalPages(flipBookRef.current.pageFlip().getPageCount());
//           setOrientation(mode);
//         }}
//       >
//         {/* Book Cover */}
//         <div className="page page-cover page-cover-top" data-density="hard">
//           <div className="page-content">
//             <h2>BOOK TITLE</h2>
//           </div>
//         </div>

//         {/* Page 1 */}
//         <div className="page">
//           <div className="page-content">
//             <h2 className="page-header">Page header 1</h2>
//             <div
//               className="page-image"
//               style={{ backgroundImage: 'url(images/html/1.jpg)' }}
//             ></div>
//             <div className="page-text">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
//               cursus mollis nibh, non convallis ex convallis eu. Suspendisse
//               potenti...
//             </div>
//             <div className="page-footer">2</div>
//           </div>
//         </div>

//         {/* Page 2 */}
//         <div className="page">
//           <div className="page-content">
//             <h2 className="page-header">Page header 15</h2>
//             <div
//               className="page-image"
//               style={{ backgroundImage: 'url(images/html/7.jpg)' }}
//             ></div>
//             <div className="page-text">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
//               cursus mollis nibh, non convallis ex convallis eu. Suspendisse
//               potenti...
//             </div>
//             <div className="page-footer">16</div>
//           </div>
//         </div>

//         {/* Page 3 */}
//         <div className="page">
//           <div className="page-content">
//             <h2 className="page-header">Page header 16</h2>
//             <div
//               className="page-image"
//               style={{ backgroundImage: 'url(images/html/8.jpg)' }}
//             ></div>
//             <div className="page-text">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
//               cursus mollis nibh, non convallis ex convallis eu. Suspendisse
//               potenti...
//             </div>
//             <div className="page-footer">17</div>
//           </div>
//         </div>

//         {/* End page */}
//         <div className="page page-cover page-cover-bottom" data-density="hard">
//           <div className="page-content">
//             <h2>THE END</h2>
//           </div>
//         </div>
//       </HTMLFlipBook>
//     </div>
//   );
// };

// export default DemoBook;



// import React, { useEffect, useRef, useState, useCallback } from 'react';
// import HTMLFlipBook from 'react-pageflip';
// import './DemoBook.scss';

// const DemoBook = () => {
//   const flipBookRef = useRef(null); // Reference to the FlipBook container
//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(0);
//   const [bookState, setBookState] = useState('read');
//   const [orientation, setOrientation] = useState('landscape');

//   // Handler for page flip event
//   const onFlip = useCallback((e) => {
//     setCurrentPage(e.data + 1); // Adjusting page number to start at 1
//   }, []);

//   // Handler for orientation change event
//   const onChangeOrientation = (e) => {
//     setOrientation(e.data);
//   };

//   // Handler for book state change
//   const onChangeState = (e) => {
//     setBookState(e.data);
//   };

//   // This ref can be used for manual page flipping controls
//   const handlePrevPage = () => {
//     if (flipBookRef.current) {
//       flipBookRef.current.pageFlip().flipPrev();
//     }
//   };

//   const handleNextPage = () => {
//     if (flipBookRef.current) {
//       flipBookRef.current.pageFlip().flipNext();
//     }
//   };

//   // Function to determine if the page is on the left or right
//   const getPageClass = (pageIndex) => {
//     // Apply --left or --right class based on whether the page is odd or even
//     return pageIndex % 2 === 0 ? '--right' : '--left';
//   };


//   // Use the onInit callback to set the total pages after initialization
//   const onInit = ({ page, mode }) => {
//     console.log("onInit callback:", { page, mode });  // Log the whole event object

//     if (mode) {
//       setOrientation(mode);  // Set the orientation if available
//     }

//     if (flipBookRef.current) {
//       const pageCount = flipBookRef.current.pageFlip().getPageCount();
//       setTotalPages(pageCount);

//       // Log the total pages and orientation
//       console.log("Total Pages:", pageCount);
//       console.log("Orientation Mode:", mode);
//     }
//   };



//   return (
//     <div className="container">
//       <div>
//         <button type="button" className="btn-prev" onClick={handlePrevPage}>
//           Previous page
//         </button>
//         <span className="page-current">{currentPage}</span> of{' '}
//         <span className="page-total">{totalPages}</span>
//         <button type="button" className="btn-next" onClick={handleNextPage}>
//           Next page
//         </button>
//       </div>

//       <div>
//         State: <i className="page-state">{bookState}</i>, orientation:{' '}
//         <i className="page-orientation">{orientation}</i>
//       </div>

//       <HTMLFlipBook
//         ref={flipBookRef}
//         width={550}
//         height={733}
//         size="stretch"
//         minWidth={315}
//         maxWidth={1000}
//         minHeight={420}
//         maxHeight={1350}
//         maxShadowOpacity={0.5}
//         showCover={true}
//         mobileScrollSupport={false}
//         onFlip={onFlip}
//         onChangeOrientation={onChangeOrientation}
//         onChangeState={onChangeState}
//         onInit={onInit}
//       >
//         {/* Book Cover */}
//         <div className="page page-cover page-cover-top" data-density="hard">
//           <div className="page-content">
//             <h2>BOOK TITLE</h2>
//           </div>
//         </div>

//         {/* Page 1 */}
//         <div className={`page ${getPageClass(1)}`}>
//           <div className="page-content">
//             <h2 className="page-header">Page header 1</h2>
//             <div
//               className="page-image"
//               style={{ backgroundImage: 'url(images/html/1.jpg)' }}
//             ></div>
//             <div className="page-text">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
//               cursus mollis nibh, non convallis ex convallis eu. Suspendisse
//               potenti...
//             </div>
//             <div className="page-footer">2</div>
//           </div>
//         </div>

//         {/* Page 2 */}
//         <div className={`page ${getPageClass(2)}`}>
//           <div className="page-content">
//             <h2 className="page-header">Page header 15</h2>
//             <div
//               className="page-image"
//               style={{ backgroundImage: 'url(images/html/7.jpg)' }}
//             ></div>
//             <div className="page-text">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
//               cursus mollis nibh, non convallis ex convallis eu. Suspendisse
//               potenti...
//             </div>
//             <div className="page-footer">16</div>
//           </div>
//         </div>

//         {/* Page 3 */}
//         <div className={`page ${getPageClass(3)}`}>
//           <div className="page-content">
//             <h2 className="page-header">Page header 16</h2>
//             <div
//               className="page-image"
//               style={{ backgroundImage: 'url(images/html/8.jpg)' }}
//             ></div>
//             <div className="page-text">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
//               cursus mollis nibh, non convallis ex convallis eu. Suspendisse
//               potenti...
//             </div>
//             <div className="page-footer">17</div>
//           </div>
//         </div>

//         {/* End page */}
//         <div className="page page-cover page-cover-bottom" data-density="hard">
//           <div className="page-content">
//             <h2>THE END</h2>
//           </div>
//         </div>
//       </HTMLFlipBook>
//     </div>
//   );
// };

// export default DemoBook;

import React, { useState, useEffect } from 'react';
import HTMLFlipBook from 'react-pageflip';
import { Document, Page, pdfjs } from 'react-pdf';
import pdf from './ByteBeatJan2024.pdf'; 
// Set the worker source for pdf.js
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

// Page component for each flipbook page
const Pages = React.forwardRef((props, ref) => {
  return (
    <div className="demoPage" ref={ref}>
      <p>{props.children}</p>
      <p>Page number: {props.number}</p>
    </div>
  );
});

Pages.displayName = 'Pages';

function Flipbook() {
  const [numPages, setNumPages] = useState(0);

  // Document load success handler
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div className="h-screen w-screen flex flex-col gap-5 justify-center items-center bg-gray-900 overflow-hidden">
      <h1 className="text-3xl text-white text-center font-bold">FlipBook</h1>
      <HTMLFlipBook width={400} height={570} children={undefined} className={''} style={undefined} startPage={0} size={'fixed'} minWidth={0} maxWidth={0} minHeight={0} maxHeight={0} drawShadow={false} flippingTime={0} usePortrait={false} startZIndex={0} autoSize={false} maxShadowOpacity={0} showCover={false} mobileScrollSupport={false} clickEventForward={false} useMouseEvents={false} swipeDistance={0} showPageCorners={false} disableFlipByClick={false}>
        {/* Render the pages only after the PDF document has loaded */}
        {numPages > 0 && (
          [...Array(numPages).keys()].map((pNum) => (
            <Pages key={pNum} number={pNum + 1}>
              <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
                <Page pageNumber={pNum + 1} width={400} renderAnnotationLayer={false} renderTextLayer={false} />
              </Document>
              <p>
                Page {pNum + 1} of {numPages}
              </p>
            </Pages>
          ))
        )}
      </HTMLFlipBook>
    </div>
  );
}

export default Flipbook;
