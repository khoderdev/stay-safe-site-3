import React from 'react';

function Sample1() {
	return (
		<div className='mx-auto flex flex-col w-96 space-y-8'>
			
			<a
				href='#_'
				className='relative inline-flex items-center justify-center px-10 py-4 overflow-hidden font-mono font-medium tracking-tighter text-white bg-gray-800 rounded-lg group'
			>
				<span className='absolute w-0 h-0 transition-all duration-500 ease-out bg-green-500 rounded-full group-hover:w-56 group-hover:h-56'></span>
				<span className='absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700'></span>
				<span className='relative'>Button Text</span>
			</a>

			<a
				href='#_'
				className='relative items-center justify-start inline-block px-5 py-3 overflow-hidden font-bold rounded-full group'
			>
				<span className='w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]'></span>
				<span className='absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8'></span>
				<span className='relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900'>
					Button Text
				</span>
				<span className='absolute inset-0 border-2 border-white rounded-full'></span>
			</a>

			<a
				href='#_'
				className='relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-full shadow-md group'
			>
				<span className='absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease'>
					<svg
						className='w-6 h-6'
						fill='none'
						stroke='currentColor'
						viewBox='0 0 24 24'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth='2'
							d='M14 5l7 7m0 0l-7 7m7-7H3'
						></path>
					</svg>
				</span>
				<span className='absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease'>
					Button Text
				</span>
				<span className='relative invisible'>Button Text</span>
			</a>

			<a
				href='#_'
				className='relative px-5 py-3 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group'
			>
				<span className='absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease'></span>
				<span className='absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease'></span>
				<span className='absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease'></span>
				<span className='absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease'></span>
				<span className='absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100'></span>
				<span className='relative transition-colors duration-300 delay-200 group-hover:text-white ease'>
					Button Text
				</span>
			</a>

			<a
				href='#_'
				className='relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-indigo-600 border-2 border-indigo-600 rounded-full hover:text-white group hover:bg-gray-50'
			>
				<span className='absolute left-0 block w-full h-0 transition-all bg-indigo-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease'></span>
				<span className='absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease'>
					<svg
						className='w-5 h-5'
						fill='none'
						stroke='currentColor'
						viewBox='0 0 24 24'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth='2'
							d='M14 5l7 7m0 0l-7 7m7-7H3'
						></path>
					</svg>
				</span>
				<span className='relative'>Button Text</span>
			</a>

			<a href='#_' className='relative inline-block text-lg group'>
				<span className='relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white'>
					<span className='absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50'></span>
					<span className='absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease'></span>
					<span className='relative'>Button Text</span>
				</span>
				<span
					className='absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0'
					data-rounded='rounded-lg'
				></span>
			</a>

			<a
				href='#_'
				className='relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group'
			>
				<span className='absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full'></span>
				<span className='absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12'>
					<svg
						className='w-5 h-5 text-green-400'
						fill='none'
						stroke='currentColor'
						viewBox='0 0 24 24'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth='2'
							d='M14 5l7 7m0 0l-7 7m7-7H3'
						></path>
					</svg>
				</span>
				<span className='absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200'>
					<svg
						className='w-5 h-5 text-green-400'
						fill='none'
						stroke='currentColor'
						viewBox='0 0 24 24'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth='2'
							d='M14 5l7 7m0 0l-7 7m7-7H3'
						></path>
					</svg>
				</span>
				<span className='relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white'>
					Button Text
				</span>
			</a>

			<a
				href='#_'
				className='rounded-md px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-indigo-600 text-indigo-600 text-white'
			>
				<span className='absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-indigo-600 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease'></span>
				<span className='relative text-indigo-600 transition duration-300 group-hover:text-white ease'>
					Button Text
				</span>
			</a>

			<a
				href='#_'
				className='px-5 py-2.5 relative rounded group overflow-hidden font-medium bg-purple-50 text-purple-600 inline-block'
			>
				<span className='absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-purple-600 group-hover:h-full opacity-90'></span>
				<span className='relative group-hover:text-white'>Button Text</span>
			</a>
		</div>
	);
}

export default Sample1;
