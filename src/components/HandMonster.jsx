import React from 'react';
import { HandMonster } from '../components/images';

function HandMonsterPage() {
	return (
		<div className='md:flex items-center'>
			<img src={HandMonster} alt='Hand Monster' className='sm:w-1/2' />
			<div className=' sm:w-[40%] dark:text-white-bg p-6'>
				<p className='text-xl  sm:text-3xl'>Your</p>
				<h1 className='text-5xl  sm:text-8xl'>HANDS</h1>
				<h2 className='text-3xl mb-3'>can carry harmful bacteria and germs.</h2>
				<p className='text-[25px]'>
					Keep them clean and safe by washing with soap and water regularly
					 for at least 20 seconds to protect yourself and others from
					illness!
				</p>
			</div>
		</div>
	);
}

export default HandMonsterPage;
