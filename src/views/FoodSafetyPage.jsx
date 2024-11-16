import React from 'react';
import { FoodSafetyTable } from '../components/Table/FoodSafetyTable';
import { columns } from '../components/Table/columns';
import { FoodSafetyBG2 } from '../components/images';

function FoodSafetyPage() {
	return (
		<div
			className=''
			// style={{
			// 	backgroundImage: `url(${FoodSafetyBG2})`,
			// 	backgroundSize: 'contain',
			// 	backgroundPosition: '50% 0%',
			// 	backgroundAttachment: 'fixed',
			// 	backgroundRepeat: 'no-repeat',
			// 	maxHeight: '100vh',
			// }}
		>
			<FoodSafetyTable columns={columns} data={FoodSafetyTable} />
		</div>
	);
}
export default FoodSafetyPage;
