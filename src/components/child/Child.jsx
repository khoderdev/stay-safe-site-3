import React, { useRef } from 'react';
import { BurgerShort } from '../images';
import CTA from './CTA';

function Child() {
	const sectionRef = useRef(null);
	return (
		<div className='flex flex-col items-center justify-between md:flex-row'>
			<img src={BurgerShort} alt='child' className='md:w-[35%] border' />
			<div className='p-6 mt-10 md:m-48'>
				<CTA targetRef={sectionRef} />
			</div>
		</div>
	);
}

export default Child;
