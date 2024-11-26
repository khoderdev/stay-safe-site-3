import React from 'react';
import { HandMonster } from '../components/images';

function HandMonsterPage() {
	return (
		<div className=' md:flex items-center h-full'>
			<img src={HandMonster} alt='Hand Monster' className='w-1/2' />
			<div className=' w-[40%] dark:text-white-bg'>
				<p className=''>Your</p>
				<h1 className='text-4xl'>HANDS</h1>
				<h2 className=' mb-3'>can carry harmful bacteria and germs.</h2>
				<p>
					Keep them clean and safe by washing with soap and water regularly
					<br /> for at least 20 seconds to protect yourself and others from
					illness!
				</p>
			</div>
		</div>
	);
}

export default HandMonsterPage;
