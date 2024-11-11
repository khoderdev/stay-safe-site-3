// import Button from '../buttons/Button';

// function PricingCard({ title, features, buttonText, setIsOpen }) {
// 	const handleButtonClick = () => {
// 		setIsOpen(true);
// 	};

// 	return (
// 		<div className='flex flex-col w-full rounded-2xl bg-opacity-90 transition-all p-6'>
// 			{/* Table for features */}
// 			<table className='w-full table-auto mb-6'>
// 				<thead>
// 					<tr>
// 						<th className='px-4 py-2 text-left text-lg font-semibold'>
// 							Services
// 						</th>
// 						<th className='px-4 py-2 text-center text-white-bg bg-pink text-lg font-semibold'>
// 							Inclusive
// 						</th>
// 						<th className='px-4 py-2 text-center text-white-bg bg-pink  text-lg font-semibold'>
// 							Necessary
// 						</th>
// 					</tr>
// 				</thead>
// 				<tbody>
// 					{features.map((feature, index) => (
// 						<tr key={index} className='border-t border-b border-[#c2c36b80]'>
// 							<td className='px-4 py-2'>{feature.title}</td>
// 							<td className='px-4 py-2 border-r border-[#c2c36b80] bg-pink text-center'>
// 								{feature.inclusive ? (
// 									<span className='text-white-bg'>✔</span>
// 								) : (
// 									<span className='text-white-bg'>–</span>
// 								)}
// 							</td>
// 							<td className='px-4 py-2  bg-pink text-center'>
// 								{feature.necessary ? (
// 									<span className='text-white-bg'>✔</span>
// 								) : (
// 									<span className='text-white-bg'>–</span>
// 								)}
// 							</td>
// 						</tr>
// 					))}
// 					<td>
// 						<button
// 							onClick={handleButtonClick}
// 							className='sm:w-auto self-center rounded-full border px-5 py-2.5 relative group overflow-hidden hover:bg-transparent  hover:text-[#0e100f] dark:hover:text-[#f0f0ee] dark:hover:border-[#f0f0ee] text-white shadow-md hover:scale-110'
// 						>
// 							<span className='absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-pink group-hover:h-full opacity-90'></span>
// 							<span className='relative text-sm group-hover:text-white-bg'>
// 								{buttonText}
// 							</span>
// 						</button>
// 						<button
// 							onClick={handleButtonClick}
// 							className='w- sm:w-auto rounded-full border px-5 py-2.5 relative group overflow-hidden hover:bg-transparent  hover:text-[#0e100f] dark:hover:text-[#f0f0ee] dark:hover:border-[#f0f0ee] text-white shadow-md hover:scale-110'
// 						>
// 							<span className='absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-pink group-hover:h-full opacity-90'></span>
// 							<span className='relative text-sm group-hover:text-white-bg'>
// 								{buttonText}
// 							</span>
// 						</button>
// 					</td>
// 				</tbody>
// 			</table>
// 		</div>
// 	);
// }

// export default PricingCard;

function PricingCard({ features, buttonText, setIsOpen }) {
	const handleButtonClick = () => {
		setIsOpen(true);
	};

	return (
		<div className='flex flex-col w-full rounded-2xl bg-opacity-90 transition-all sm:p-6'>
			{/* Table for features */}
			<table className='w-full table-auto mb-6'>
				<thead>
					<tr>
						<th className='px-4 py-2 text-left text-lg font-semibold'>
							Services
						</th>
						<th className='sm:w-44 sm:px-4 py-2 text-center text-white-bg bg-pink text-lg font-semibold'>
							Inclusive
						</th>
						<th className='sm:w-44 sm:px-4 py-2 text-center text-white-bg bg-pink text-lg font-semibold'>
							Necessary
						</th>
					</tr>
				</thead>
				<tbody>
					{features.map((feature, index) => (
						<tr key={index} className='border-t border-b border-[#c2c36b80]'>
							<td className='px-4 py-2'>{feature.title}</td>
							<td className='px-4 py-2 border-r border-[#c2c36b80] bg-pink text-center'>
								{feature.inclusive ? (
									<span className='text-white-bg'>✔</span>
								) : (
									<span className='text-white-bg'>–</span>
								)}
							</td>
							<td className='px-4 py-2 bg-pink text-center'>
								{feature.necessary ? (
									<span className='text-white-bg'>✔</span>
								) : (
									<span className='text-white-bg'>–</span>
								)}
							</td>
						</tr>
					))}
					{/* New row for buttons under "Inclusive" and "Necessary" columns */}
					<tr>
						<td></td> {/* Empty cell under "Services" */}
						<td className=''>
							<button
								onClick={handleButtonClick}
								className='w-full sm:w-44 border-pink border px-5 py-2.5 relative group overflow-hidden hover:bg-transparent text-pink font-semibold hover:text-[#0e100f] dark:hover:text-[#f0f0ee] dark:hover:border-[#f0f0ee] text-white shadow-md '
							>
								<span className='absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-pink group-hover:h-full opacity-90'></span>
								<span className='relative text-sm group-hover:text-white-bg'>
									{buttonText}
								</span>
							</button>
						</td>
						<td className=''>
							<button
								onClick={handleButtonClick}
								className='w-full sm:w-44 border-pink border px-5 py-2.5 relative group overflow-hidden hover:bg-transparent text-pink font-semibold hover:text-[#0e100f] dark:hover:text-[#f0f0ee] dark:hover:border-[#f0f0ee] text-white shadow-md '
							>
								<span className='absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-pink group-hover:h-full opacity-90'></span>
								<span className='relative text-sm group-hover:text-white-bg'>
									{buttonText}
								</span>
							</button>
						</td>
					</tr>
				</tbody>
			</table>
			<p className='text-lg font-semibold ml-5'>Benefits</p>
			<ul className='pl-6 space-y-2 pb-10'>
				<span className='flex ml-[-0.5rem]'>
					✔
					<li className='ml-2'>
						Point Reward System Enrolment (benefits up to $350/month)
					</li>
				</span>
				<span className='flex ml-[-0.5rem]'>
					✔<li className='ml-2'>10% Discount</li>{' '}
				</span>
				<span className='flex ml-[-0.5rem]'>
					✔<li className='ml-2'>Voucher Gift Card</li>
				</span>
			</ul>
		</div>
	);
}

export default PricingCard;
