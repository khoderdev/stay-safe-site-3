import React from 'react';
import { FoodSafetyTable } from '../components/Table/FoodSafetyTable';
import { columns } from '../components/Table/columns';

function FoodSafetyPage() {
	return (
		<div className=''>
			<FoodSafetyTable columns={columns} data={FoodSafetyTable} />
		</div>
	);
}
export default FoodSafetyPage;
