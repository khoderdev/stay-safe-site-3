import React from 'react';
import TopSection from './TopSection';
import MiddleSection from './MiddleSection';
import BottomSection from './BottomSection';


function Bacteria() {
	return (
		<div className='flex flex-col overflow-y-scroll h-full'>
			<TopSection />
			<MiddleSection />
			<BottomSection />
		</div>
	);
}
export default Bacteria;