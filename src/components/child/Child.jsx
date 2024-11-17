import React, { useRef } from 'react';
import { child } from '../images';
import CTA from './CTA';

function Child() {
	const sectionRef = useRef(null);
	return (
		<div className='flex items-center justify-between'>
			<img src={child} alt='child' className='sm:w-1/2 border' />
			<div className=' mr-48'>
				<CTA targetRef={sectionRef} />
			</div>
		</div>
	);
}

export default Child;
