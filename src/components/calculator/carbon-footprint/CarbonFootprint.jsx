import { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

const CarbonFootprintCalculator = () => {
	const [url, setUrl] = useState('');
	const [result, setResult] = useState(null);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);

	const calculateCarbonFootprint = async () => {
		try {
			setError(null);
			setResult(null);
			setLoading(true);

			// Validate URL format
			if (!url.startsWith('http')) {
				setError("Please enter a valid URL starting with 'http' or 'https'.");
				setLoading(false);
				return;
			}

			const backendApiUrl = `http://localhost:8800/carbon-emissions?url=${encodeURIComponent(
				url
			)}`;
			const response = await axios.get(backendApiUrl);
			setResult(response.data);
		} catch (err) {
			setError(
				'An error occurred while fetching the carbon footprint data. Please check your URL or try again later.'
			);
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className='flex justify-center '>
			{/* Input Section */}
			<motion.div
				className={`max-w-[50%] bg-gradient-to-r from-blue-400 to-blue-600 p-8 rounded-lg shadow-lg transition-all duration-300 ${
					result ? 'translate-x-[-50%]' : 'mx-auto'
				}`} // Center the input when there's no result
				initial={{ opacity: 0, scale: 0.8 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 0.5 }}
			>
				<h2 className='text-3xl font-bold mb-6 text-white text-center'>
					Website Carbon Footprint Calculator
				</h2>

				<label className='block mb-4'>
					<span className='text-black'>Website URL:</span>
					<input
						type='text'
						value={url}
						onChange={(e) => setUrl(e.target.value)}
						placeholder='Enter website URL'
						className='mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-500 transition duration-200'
					/>
				</label>

				<button
					onClick={calculateCarbonFootprint}
					className='mt-4 w-full bg-white text-white-fg font-semibold py-2 rounded-md shadow hover:bg-blue-100 transition duration-200'
					disabled={loading}
				>
					{loading ? 'Calculating...' : 'Calculate Carbon Footprint'}
				</button>

				{loading && (
					<motion.div
						className='mt-4 text-center'
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.5 }}
					>
						<p className='text-gray-300'>Loading...</p>
					</motion.div>
				)}
			</motion.div>

			{/* Result Section */}
			{result && (
				<motion.div
					className='w-1/2 px-6'
					initial={{ opacity: 0, x: 20 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.5 }}
				>
					<div className='bg-white-fg p-4 rounded-md shadow-md'>
						<h3 className='text-2xl font-semibold'>
							<span className='border-b-2 border-green-700 font-bold'>
								Carbon
							</span>{' '}
							Footprint Results
						</h3>
						<p>
							<strong>URL:</strong> {result.url}
						</p>
						<p>
							<strong>Green Hosting:</strong>{' '}
							{result.green === true
								? 'Yes'
								: result.green === 'unknown'
								? 'Unknown'
								: 'No'}
						</p>
						<p>
							<strong>Bytes Transferred:</strong> {result.bytes} bytes
						</p>
						<p>
							<strong>Cleaner Than:</strong>{' '}
							{Math.round(result.cleanerThan * 100)}% of other websites
						</p>
						<h4 className='font-semibold mt-2'>Statistics:</h4>
						<p>
							<strong>Adjusted Bytes:</strong>{' '}
							{result.statistics.adjustedBytes.toFixed(2)} bytes
						</p>
						<p>
							<strong>Energy Used:</strong>{' '}
							{result.statistics.energy.toFixed(6)} kWh
						</p>
						<h4 className='font-semibold mt-2'>CO₂ Emissions:</h4>
						<p>
							<strong>Grid Emissions:</strong>{' '}
							{result.statistics.co2.grid.grams.toFixed(3)} grams CO₂ /{' '}
							{result.statistics.co2.grid.litres.toFixed(3)} litres
						</p>
						<p>
							<strong>Renewable Emissions:</strong>{' '}
							{result.statistics.co2.renewable.grams.toFixed(3)} grams CO₂ /{' '}
							{result.statistics.co2.renewable.litres.toFixed(3)} litres
						</p>
					</div>
				</motion.div>
			)}

			{error && (
				<motion.div
					className='mt-4 text-red-600'
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.5 }}
				>
					<p>{error}</p>
				</motion.div>
			)}
		</div>
	);
};

export default CarbonFootprintCalculator;
