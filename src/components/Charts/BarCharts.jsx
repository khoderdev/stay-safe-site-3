// // // // // import React from 'react';
// // // // // import Chart from 'react-apexcharts';
// // // // // import './charts.css';
// // // // // const BarCharts = () => {
// // // // // 	const chartOptions = {
// // // // // 		series: [
// // // // // 			{
// // // // // 				name: 'Deaths',
// // // // // 				color: '#e55e72',
// // // // // 				data: [9.1, 8.8, 6.8, 3.4, 2.5, 1.9, 1.8, 1.6, 1.3, 1.25],
// // // // // 				formatter: (value) => value + ' M',
// // // // // 			},
// // // // // 		],
// // // // // 		chart: {
// // // // // 			type: 'bar',
// // // // // 			height: 600,
// // // // // 			toolbar: {
// // // // // 				show: false,
// // // // // 			},
// // // // // 		},
// // // // // 		plotOptions: {
// // // // // 			bar: {
// // // // // 				horizontal: false,
// // // // // 				columnWidth: '70%',
// // // // // 				borderRadius: 6,
// // // // // 				dataLabels: {
// // // // // 					position: 'top',
// // // // // 				},
// // // // // 			},
// // // // // 		},
// // // // // 		dataLabels: {
// // // // // 			enabled: true,
// // // // // 			formatter: (value) => value + ' M',
// // // // // 		},
// // // // // 		xaxis: {
// // // // // 			categories: [
// // // // // 				'Ischaemic\nHeart\nDisease',
// // // // // 				'COVID-19',
// // // // // 				'Stroke',
// // // // // 				'Chronic\nObstructive\nPulmonary\nDisease',
// // // // // 				'Lower\nRespiratory\nInfections',
// // // // // 				'Trachea,\nBronchus,\nLung\nCancers',
// // // // // 				'Alzheimer\nDisease\nand\nother\nDementias',
// // // // // 				'Diabetes\nMellitus',
// // // // // 				'Kidney\nDiseases',
// // // // // 				'Tuberculosis',
// // // // // 			],

// // // // // 			labels: {
// // // // // 				hideOverlappingLabels:true,
// // // // // 				rotate: 0, // Prevent rotation
// // // // // 				style: {
// // // // // 					fontSize: '12px',
// // // // // 					fontFamily: 'Helvetica, Arial, sans-serif',
// // // // // 					colors: ['#333'], // Label color
// // // // // 				},
// // // // // 			},
// // // // // 		},

// // // // // 		grid: {
// // // // // 			show: true,
// // // // // 			strokeDashArray: 2,
// // // // // 		},
// // // // // 	};

// // // // 	return (
// // // // 		<div className='flex flex-col items-center bg-white-bg3 rounded-lg shadow dark:bg-black p-4 md:px-6 border overflow-auto'>
// // // // 			{/* Top Section: Chart and Title */}
// // // // 			<div className='flex flex-wrap md:flex-nowrap w-full'>
// // // // 				{/* Chart Section */}
// // // // 				<div className='w-full md:w-1/2 flex justify-center'>
// // // // 					<div id='bar-chart' className='w-full'>
// // // // 						<Chart
// // // // 							options={chartOptions}
// // // // 							series={chartOptions.series}
// // // // 							type='bar'
// // // // 							height={580}
// // // // 						/>
// // // // 					</div>
// // // // 				</div>
// // // // 				{/* Title Section */}
// // // // 				<div className='w-full md:w-1/2 flex items-center justify-center p-4'>
// // // // 					<h1 className='text-3xl text-center md:text-left dark:text-white-bg2'>
// // // // 						Around 80% of the top 10 causes of death are preventable or
// // // // 						manageable through preventive measures and lifestyle changes
// // // // 					</h1>
// // // // 				</div>
// // // // 			</div>

// // // // 			{/* Bottom Section: Supporting Text */}
// // // // 			<div className='w-full mt-8 text-center dark:text-white-bg2 p-4'>
// // // // 				<p>
// // // // 					We’re committed to supporting you in managing your health, no matter
// // // // 					where you are in your journey. We understand that living with disease
// // // // 					can be challenging, but we want you to know that you’re not alone. Our
// // // // 					team is here to provide you with personalized guidance, resources, and
// // // // 					support. Together, we can create a plan that helps you take control of
// // // // 					your health, learn more about your condition, prevent complications,
// // // // 					and improve your quality of life. Gain access to personalized support.
// // // // 					Get Support Now.
// // // // 				</p>
// // // // 			</div>
// // // // 		</div>
// // // // 	);
// // // // };

// // // // export default BarCharts;

// // // // // // import React from 'react';
// // // // // // import Chart from 'react-apexcharts';

// // // // // // const BarCharts = () => {
// // // // // // 	const chartOptions = {
// // // // // // 		series: [
// // // // // // 			{
// // // // // // 				name: 'Deaths',
// // // // // // 				color: '#e55e72',
// // // // // // 				data: [9.1, 8.8, 6.8, 3.4, 2.5, 1.9, 1.8, 1.6, 1.3, 1.25],
// // // // // // 				formatter: (value) => value + ' M',
// // // // // // 			},
// // // // // // 		],
// // // // // // 		chart: {
// // // // // // 			type: 'bar',
// // // // // // 			height: 600,
// // // // // // 			toolbar: {
// // // // // // 				show: false,
// // // // // // 			},
// // // // // // 		},
// // // // // // 		plotOptions: {
// // // // // // 			bar: {
// // // // // // 				horizontal: false,
// // // // // // 				columnWidth: '55%',
// // // // // // 				borderRadius: 6,
// // // // // // 				dataLabels: {
// // // // // // 					position: 'top',
// // // // // // 				},
// // // // // // 			},
// // // // // // 		},
// // // // // // 		dataLabels: {
// // // // // // 			enabled: true,
// // // // // // 			formatter: (value) => value + ' M',
// // // // // // 		},
// // // // // // 		xaxis: {
// // // // // // 			categories: [
// // // // // // 				'Ischaemic Heart Disease',
// // // // // // 				'COVID-19',
// // // // // // 				'Stroke',
// // // // // // 				'Chronic Obstructive Pulmonary Disease',
// // // // // // 				'Lower Respiratory Infections',
// // // // // // 				'Trachea, Bronchus, Lung Cancers',
// // // // // // 				'Alzheimer Disease and other Dementias',
// // // // // // 				'Diabetes Mellitus',
// // // // // // 				'Kidney Diseases',
// // // // // // 				'Tuberculosis',
// // // // // // 			],
// // // // // // 			labels: {
// // // // // // 				formatter: (value) => '' + value,
// // // // // // 			},
// // // // // // 		},
// // // // // // 		grid: {
// // // // // // 			show: true,
// // // // // // 			strokeDashArray: 2,
// // // // // // 		},
// // // // // // 	};

// // // // // // 	return (
// // // // // // 		<div className='flexx h-full bg-white-bg3 rounded-lg shadow dark:bg-black p-4 md:px-6 border'>
// // // // // // 			<div className='flex flex-col w-full h-full bg-white-bg3 rounded-lg shadow dark:bg-black p-4 md:px-6 border'>
// // // // // // 				<div className='border'>
// // // // // // 					<h1 className='text-3xl dark:text-white-bg2'>
// // // // // // 						Around 80% of the top 10 causes of death are preventable or
// // // // // // 						manageable through preventive measures and lifestyle changes
// // // // // // 					</h1>
// // // // // // 				</div>
// // // // // // 				<div id='bar-chart' className='border-b dark:border-gray-700 border'>
// // // // // // 					<Chart
// // // // // // 						options={chartOptions}
// // // // // // 						series={chartOptions.series}
// // // // // // 						type='bar'
// // // // // // 						height={580}
// // // // // // 					/>
// // // // // // 				</div>
// // // // // // 			</div>

// // // // // // 			<div className='dark:text-white-bg2 p-4 border'>
// // // // // // 				we’re committed to supporting you in managing your health, no matter
// // // // // // 				where you are in your journey. We understand that living with disease
// // // // // // 				can be challenging, but we want you to know that you’re not alone. Our
// // // // // // 				team is here to provide you with personalized guidance, resources, and
// // // // // // 				support. Together, we can create a plan that helps you take control of
// // // // // // 				your health, learn more about your condition, prevent complications, and
// // // // // // 				improve your quality of life. Gain access to personalized support. Get
// // // // // // 				Support Now Around 80% of the top 10 causes of death are preventable or
// // // // // // 				manageable through preventive measures and lifestyle changes
// // // // // // 			</div>
// // // // // // 		</div>
// // // // // // 	);
// // // // // // };

// // // // // // export default BarCharts;
// // // // // // // // // // // import React from 'react';
// // // // // // // // // // // import Chart from 'react-apexcharts';

// // // // // // // // // // // const BarCharts = () => {
// // // // // // // // // // // 	const chartOptions = {
// // // // // // // // // // // 		series: [
// // // // // // // // // // // 			{
// // // // // // // // // // // 				name: 'Deaths',
// // // // // // // // // // // 				color: '#e55e72', // Bar color
// // // // // // // // // // // 				data: [9.1, 8.8, 6.8, 3.4, 2.5, 1.9, 1.8, 1.6, 1.3, 1.25],
// // // // // // // // // // // 			},
// // // // // // // // // // // 		],
// // // // // // // // // // // 		chart: {
// // // // // // // // // // // 			type: 'bar',
// // // // // // // // // // // 			height: 600,
// // // // // // // // // // // 			toolbar: {
// // // // // // // // // // // 				show: false,
// // // // // // // // // // // 			},
// // // // // // // // // // // 		},
// // // // // // // // // // // 		plotOptions: {
// // // // // // // // // // // 			bar: {
// // // // // // // // // // // 				horizontal: false,
// // // // // // // // // // // 				columnWidth: '60%',
// // // // // // // // // // // 				borderRadius: 6,
// // // // // // // // // // // 				dataLabels: {
// // // // // // // // // // // 					position: 'top',
// // // // // // // // // // // 				},
// // // // // // // // // // // 			},
// // // // // // // // // // // 		},
// // // // // // // // // // // 		dataLabels: {
// // // // // // // // // // // 			enabled: true,
// // // // // // // // // // // 			style: {
// // // // // // // // // // // 				fontSize: '1.5rem', // Font size for data values
// // // // // // // // // // // 				fontWeight: 'bold',
// // // // // // // // // // // 				colors: ['#fff'], // Color for data values
// // // // // // // // // // // 			},
// // // // // // // // // // // 			formatter: (value) => value + ' M',
// // // // // // // // // // // 		},
// // // // // // // // // // // 		xaxis: {
// // // // // // // // // // // 			categories: [
// // // // // // // // // // // 				'Ischaemic Heart Disease',
// // // // // // // // // // // 				'COVID-19',
// // // // // // // // // // // 				'Stroke',
// // // // // // // // // // // 				'Chronic Obstructive Pulmonary Disease',
// // // // // // // // // // // 				'Lower Respiratory Infections',
// // // // // // // // // // // 				'Trachea, Bronchus, Lung Cancers',
// // // // // // // // // // // 				'Alzheimer Disease and other Dementias',
// // // // // // // // // // // 				'Diabetes Mellitus',
// // // // // // // // // // // 				'Kidney Diseases',
// // // // // // // // // // // 				'Tuberculosis',
// // // // // // // // // // // 			],
// // // // // // // // // // // 			labels: {
// // // // // // // // // // // 				style: {
// // // // // // // // // // //           fontWeight:"bold",
// // // // // // // // // // // 					fontSize: '1.2rem', // Font size for category labels
// // // // // // // // // // // 					colors: ['#1e90ff'], // Color for x-axis labels
// // // // // // // // // // // 				},
// // // // // // // // // // // 			},
// // // // // // // // // // // 		},
// // // // // // // // // // // 		grid: {
// // // // // // // // // // // 			show: true,
// // // // // // // // // // // 			strokeDashArray: 2,
// // // // // // // // // // // 		},
// // // // // // // // // // // 		yaxis: {
// // // // // // // // // // // 			labels: {
// // // // // // // // // // // 				style: {
// // // // // // // // // // //           fontWeight:"bold",
// // // // // // // // // // // 					fontSize: '1.2rem', // Font size for y-axis labels
// // // // // // // // // // // 					colors: ['#1e90ff'], // Color for y-axis labels
// // // // // // // // // // // 				},
// // // // // // // // // // // 			},
// // // // // // // // // // // 		},
// // // // // // // // // // // 	};

// // // // // // // // // // // 	return (
// // // // // // // // // // // 		<div className='w-full h-full bg-white-bg3 rounded-lg shadow dark:bg-black p-4 md:px-6'>
// // // // // // // // // // // 			{/* Bar chart section */}
// // // // // // // // // // // 			<div id='bar-chart' className='border-b dark:border-gray-700'>
// // // // // // // // // // // 				<Chart
// // // // // // // // // // // 					options={chartOptions}
// // // // // // // // // // // 					series={chartOptions.series}
// // // // // // // // // // // 					type='bar'
// // // // // // // // // // // 					height={580}
// // // // // // // // // // // 				/>
// // // // // // // // // // // 			</div>
// // // // // // // // // // // 			<div className='dark:text-white-bg2 p-4'>
// // // // // // // // // // // 				we’re committed to supporting you in managing your health, no matter
// // // // // // // // // // // 				where you are in your journey. We understand that living with disease
// // // // // // // // // // // 				can be challenging, but we want you to know that you’re not alone. Our
// // // // // // // // // // // 				team is here to provide you with personalized guidance, resources, and
// // // // // // // // // // // 				support. Together, we can create a plan that helps you take control of
// // // // // // // // // // // 				your health, learn more about your condition, prevent complications, and
// // // // // // // // // // // 				improve your quality of life. Gain access to personalized support. Get
// // // // // // // // // // // 				Support Now Around 80% of the top 10 causes of death are preventable or
// // // // // // // // // // // 				manageable through preventive measures and lifestyle changes
// // // // // // // // // // // 			</div>
// // // // // // // // // // // 		</div>
// // // // // // // // // // // 	);
// // // // // // // // // // // };

// // // // // // // // // // // export default BarCharts;
// // // // // // // // // // import React from 'react';
// // // // // // // // // // import Chart from 'react-apexcharts';

// // // // // // // // // // const BarCharts = () => {
// // // // // // // // // // 	const chartOptions = {
// // // // // // // // // // 		series: [
// // // // // // // // // // 			{
// // // // // // // // // // 				name: 'Deaths',
// // // // // // // // // // 				color: '#e55e72', // Bar color
// // // // // // // // // // 				data: [9.1, 8.8, 6.8, 3.4, 2.5, 1.9, 1.8, 1.6, 1.3, 1.25],
// // // // // // // // // // 			},
// // // // // // // // // // 		],
// // // // // // // // // // 		chart: {
// // // // // // // // // // 			type: 'bar',
// // // // // // // // // // 			height: 600,
// // // // // // // // // // 			toolbar: {
// // // // // // // // // // 				show: false,
// // // // // // // // // // 			},
// // // // // // // // // // 		},
// // // // // // // // // // 		plotOptions: {
// // // // // // // // // // 			bar: {
// // // // // // // // // // 				horizontal: false,
// // // // // // // // // // 				columnWidth: '60%',
// // // // // // // // // // 				borderRadius: 6,
// // // // // // // // // // 				dataLabels: {
// // // // // // // // // // 					position: 'top',
// // // // // // // // // // 				},
// // // // // // // // // // 			},
// // // // // // // // // // 		},
// // // // // // // // // // 		dataLabels: {
// // // // // // // // // // 			enabled: true,
// // // // // // // // // // 			style: {
// // // // // // // // // // 				fontSize: '1.5rem',
// // // // // // // // // // 				fontWeight: 'bold',
// // // // // // // // // // 				colors: ['#fff'],
// // // // // // // // // // 			},
// // // // // // // // // // 			formatter: (value) => value + ' M',
// // // // // // // // // // 		},
// // // // // // // // // // 		xaxis: {
// // // // // // // // // // 			categories: [
// // // // // // // // // // 				'Ischaemic Heart Disease',
// // // // // // // // // // 				'COVID-19',
// // // // // // // // // // 				'Stroke',
// // // // // // // // // // 				'Chronic Obstructive Pulmonary Disease',
// // // // // // // // // // 				'Lower Respiratory Infections',
// // // // // // // // // // 				'Trachea, Bronchus, Lung Cancers',
// // // // // // // // // // 				'Alzheimer Disease and other Dementias',
// // // // // // // // // // 				'Diabetes Mellitus',
// // // // // // // // // // 				'Kidney Diseases',
// // // // // // // // // // 				'Tuberculosis',
// // // // // // // // // // 			],
// // // // // // // // // // 			labels: {
// // // // // // // // // // 				style: {
// // // // // // // // // // 					fontWeight: 'bold',
// // // // // // // // // // 					fontSize: '1.2rem',
// // // // // // // // // // 					colors: '#fff',
// // // // // // // // // // 				},
// // // // // // // // // // 			},
// // // // // // // // // // 		},
// // // // // // // // // // 		grid: {
// // // // // // // // // // 			show: true,
// // // // // // // // // // 			strokeDashArray: 2,
// // // // // // // // // // 		},
// // // // // // // // // // 		yaxis: {
// // // // // // // // // // 			show: false,
// // // // // // // // // // 			labels: {
// // // // // // // // // // 				style: {
// // // // // // // // // // 					fontWeight: 'bold',
// // // // // // // // // // 					fontSize: '1.2rem',
// // // // // // // // // // 					colors: '#1e90ff',
// // // // // // // // // // 				},
// // // // // // // // // // 			},
// // // // // // // // // // 		},
// // // // // // // // // // 		tooltip: {
// // // // // // // // // // 			enabled: true,
// // // // // // // // // // 			y: {
// // // // // // // // // // 				formatter: (value) => value + ' M', // Adding "M" in tooltip values
// // // // // // // // // // 			},
// // // // // // // // // // 		},
// // // // // // // // // // 	};

// // // // // // // // // // 	return (
// // // // // // // // // // 		<div className='w-full h-full bg-white-bg3 rounded-lg shadow dark:bg-black p-4 md:px-6'>
// // // // // // // // // // 			{/* Bar chart section */}
// // // // // // // // // // 			<div id='bar-chart' className='border-b dark:border-gray-700'>
// // // // // // // // // // 				<Chart
// // // // // // // // // // 					options={chartOptions}
// // // // // // // // // // 					series={chartOptions.series}
// // // // // // // // // // 					type='bar'
// // // // // // // // // // 					height={580}
// // // // // // // // // // 				/>
// // // // // // // // // // 			</div>
// // // // // // // // // // 			<div className='dark:text-white-bg2 p-4'>
// // // // // // // // // // 				we’re committed to supporting you in managing your health, no matter
// // // // // // // // // // 				where you are in your journey. We understand that living with disease
// // // // // // // // // // 				can be challenging, but we want you to know that you’re not alone. Our
// // // // // // // // // // 				team is here to provide you with personalized guidance, resources, and
// // // // // // // // // // 				support. Together, we can create a plan that helps you take control of
// // // // // // // // // // 				your health, learn more about your condition, prevent complications, and
// // // // // // // // // // 				improve your quality of life. Gain access to personalized support. Get
// // // // // // // // // // 				Support Now Around 80% of the top 10 causes of death are preventable or
// // // // // // // // // // 				manageable through preventive measures and lifestyle changes
// // // // // // // // // // 			</div>
// // // // // // // // // // 		</div>
// // // // // // // // // // 	);
// // // // // // // // // // };

// // // // // // // // // // export default BarCharts;
// // // // // // // // // import React from 'react';
// // // // // // // // // import Chart from 'react-apexcharts';

// // // // // // // // // const BarCharts = () => {
// // // // // // // // // 	const chartOptions = {
// // // // // // // // // 		series: [
// // // // // // // // // 			{
// // // // // // // // // 				name: 'Deaths',
// // // // // // // // // 				color: '#e55e72', // Bar color
// // // // // // // // // 				data: [9.1, 8.8, 6.8, 3.4, 2.5, 1.9, 1.8, 1.6, 1.3, 1.25],
// // // // // // // // // 			},
// // // // // // // // // 		],
// // // // // // // // // 		chart: {
// // // // // // // // // 			type: 'bar',
// // // // // // // // // 			height: 600,
// // // // // // // // // 			toolbar: {
// // // // // // // // // 				show: false,
// // // // // // // // // 			},
// // // // // // // // // 		},
// // // // // // // // // 		plotOptions: {
// // // // // // // // // 			bar: {
// // // // // // // // // 				horizontal: false,
// // // // // // // // // 				columnWidth: '60%',
// // // // // // // // // 				borderRadius: 6,
// // // // // // // // // 				dataLabels: {
// // // // // // // // // 					position: 'top',
// // // // // // // // // 				},
// // // // // // // // // 			},
// // // // // // // // // 		},
// // // // // // // // // 		dataLabels: {
// // // // // // // // // 			enabled: true,
// // // // // // // // // 			style: {
// // // // // // // // // 				fontSize: '1.5rem',
// // // // // // // // // 				fontWeight: 'bold',
// // // // // // // // // 				colors: ['#fff'],
// // // // // // // // // 			},
// // // // // // // // // 			formatter: (value) => value + ' M',
// // // // // // // // // 		},
// // // // // // // // // 		xaxis: {
// // // // // // // // // 			categories: [
// // // // // // // // // 				'Ischaemic Heart Disease',
// // // // // // // // // 				'COVID-19',
// // // // // // // // // 				'Stroke',
// // // // // // // // // 				'Chronic Obstructive Pulmonary Disease',
// // // // // // // // // 				'Lower Respiratory Infections',
// // // // // // // // // 				'Trachea, Bronchus, Lung Cancers',
// // // // // // // // // 				'Alzheimer Disease and other Dementias',
// // // // // // // // // 				'Diabetes Mellitus',
// // // // // // // // // 				'Kidney Diseases',
// // // // // // // // // 				'Tuberculosis',
// // // // // // // // // 			],
// // // // // // // // // 			labels: {
// // // // // // // // // 				style: {
// // // // // // // // // 					fontWeight: 'bold',
// // // // // // // // // 					fontSize: '1rem',
// // // // // // // // // 					colors: '#fff',
// // // // // // // // // 					whiteSpace: 'normal',
// // // // // // // // // 				},
// // // // // // // // // 				rotate: 0,
// // // // // // // // // 				maxHeight: 60,
// // // // // // // // // 				trim: true,
// // // // // // // // // 			},
// // // // // // // // // 			tickPlacement: 'on',
// // // // // // // // // 		},
// // // // // // // // // 		grid: {
// // // // // // // // // 			show: true,
// // // // // // // // // 			strokeDashArray: 2,
// // // // // // // // // 		},
// // // // // // // // // 		yaxis: {
// // // // // // // // // 			show: false,
// // // // // // // // // 			labels: {
// // // // // // // // // 				style: {
// // // // // // // // // 					fontWeight: 'bold',
// // // // // // // // // 					fontSize: '1.2rem',
// // // // // // // // // 					colors: '#1e90ff',
// // // // // // // // // 				},
// // // // // // // // // 			},
// // // // // // // // // 		},
// // // // // // // // // 		tooltip: {
// // // // // // // // // 			enabled: true,
// // // // // // // // // 			y: {
// // // // // // // // // 				formatter: (value) => value + ' M',
// // // // // // // // // 			},
// // // // // // // // // 		},
// // // // // // // // // 	};

// // // // // // // // // 	return (
// // // // // // // // // 		<div className='w-full h-full bg-white-bg3 rounded-lg shadow dark:bg-black p-4 md:px-6'>
// // // // // // // // // 			<h1 className='text-3xl dark:text-white-bg2'>Around 80% of the top 10 causes of death are preventable or manageable through preventive measures and lifestyle changes</h1>
// // // // // // // // // 			{/* Bar chart section */}
// // // // // // // // // 			<div id='bar-chart' className='border-b dark:border-gray-700'>
// // // // // // // // // 				<Chart
// // // // // // // // // 					options={chartOptions}
// // // // // // // // // 					series={chartOptions.series}
// // // // // // // // // 					type='bar'
// // // // // // // // // 					height={580}
// // // // // // // // // 				/>
// // // // // // // // // 			</div>
// // // // // // // // // 			<div className='dark:text-white-bg2 p-4'>
// // // // // // // // // 				we’re committed to supporting you in managing your health, no matter
// // // // // // // // // 				where you are in your journey. We understand that living with disease
// // // // // // // // // 				can be challenging, but we want you to know that you’re not alone. Our
// // // // // // // // // 				team is here to provide you with personalized guidance, resources, and
// // // // // // // // // 				support. Together, we can create a plan that helps you take control of
// // // // // // // // // 				your health, learn more about your condition, prevent complications, and
// // // // // // // // // 				improve your quality of life. Gain access to personalized support. Get
// // // // // // // // // 				Support Now Around 80% of the top 10 causes of death are preventable or
// // // // // // // // // 				manageable through preventive measures and lifestyle changes
// // // // // // // // // 			</div>
// // // // // // // // // 		</div>
// // // // // // // // // 	);
// // // // // // // // // };

// // // // // // // // // export default BarCharts;
// // // // // // // // import React from 'react';
// // // // // // // // import Chart from 'react-apexcharts';

// // // // // // // // const BarCharts = () => {
// // // // // // // // 	const chartOptions = {
// // // // // // // // 		series: [
// // // // // // // // 			{
// // // // // // // // 				name: 'Deaths',
// // // // // // // // 				color: '#e55e72', // Bar color
// // // // // // // // 				data: [9.1, 8.8, 6.8, 3.4, 2.5, 1.9, 1.8, 1.6, 1.3, 1.25],
// // // // // // // // 			},
// // // // // // // // 		],
// // // // // // // // 		chart: {
// // // // // // // // 			type: 'bar',
// // // // // // // // 			height: 600,
// // // // // // // // 			toolbar: {
// // // // // // // // 				show: false,
// // // // // // // // 			},
// // // // // // // // 			zoom: {
// // // // // // // // 				enabled: false, // Disable zoom functionality
// // // // // // // // 			},
// // // // // // // // 		},
// // // // // // // // 		plotOptions: {
// // // // // // // // 			bar: {
// // // // // // // // 				horizontal: true,
// // // // // // // // 				columnWidth: '60%',
// // // // // // // // 				borderRadius: 6,
// // // // // // // // 				dataLabels: {
// // // // // // // // 					position: 'top',
// // // // // // // // 				},
// // // // // // // // 			},
// // // // // // // // 		},
// // // // // // // // 		dataLabels: {
// // // // // // // // 			enabled: false,
// // // // // // // // 			style: {
// // // // // // // // 				fontSize: '1.5rem',
// // // // // // // // 				fontWeight: 'bold',
// // // // // // // // 				colors: ['#fff'],
// // // // // // // // 			},
// // // // // // // // 			formatter: (value) => value + ' M',
// // // // // // // // 		},
// // // // // // // // 		yaxis: {
// // // // // // // // 			categories: [
// // // // // // // // 				'Ischaemic Heart Disease Chronic Obstructive Pulmonary Disease',
// // // // // // // // 				'COVID-19',
// // // // // // // // 				'Stroke',
// // // // // // // // 				'Chronic Obstructive Pulmonary Disease',
// // // // // // // // 				'Lower Respiratory Infections',
// // // // // // // // 				'Trachea, Bronchus, Lung Cancers',
// // // // // // // // 				'Alzheimer Disease and other Dementias',
// // // // // // // // 				'Diabetes Mellitus',
// // // // // // // // 				'Kidney Diseases',
// // // // // // // // 				'Tuberculosis',
// // // // // // // // 			],
// // // // // // // // 			labels: {
// // // // // // // // 				style: {
// // // // // // // // 					fontWeight: 'bold',
// // // // // // // // 					fontSize: '1rem',
// // // // // // // // 					colors: '#fff',
// // // // // // // // 				},

// // // // // // // // 			},
// // // // // // // // 			tickPlacement: 'on',
// // // // // // // // 		},
// // // // // // // // 		grid: {
// // // // // // // // 			show: false,
// // // // // // // // 			strokeDashArray: 2,
// // // // // // // // 		},
// // // // // // // // 		xaxis: {
// // // // // // // // 			show: false,
// // // // // // // // 			labels: {
// // // // // // // // 				style: {
// // // // // // // // 					fontWeight: 'bold',
// // // // // // // // 					fontSize: '1.2rem',
// // // // // // // // 					colors: '#1e90ff',
// // // // // // // // 				},
// // // // // // // // 			},
// // // // // // // // 		},
// // // // // // // // 		tooltip: {
// // // // // // // // 			enabled: true,
// // // // // // // // 			y: {
// // // // // // // // 				formatter: (value) => value + ' M', // Adding "M" in tooltip values
// // // // // // // // 			},
// // // // // // // // 		},
// // // // // // // // 	};

// // // // // // // // 	return (
// // // // // // // // 		<div className='w-full h-full bg-white-bg3 rounded-lg shadow dark:bg-black p-4 md:px-6'>
// // // // // // // // 			<h1 className='text-3xl dark:text-white-bg2'>Around 80% of the top 10 causes of death are preventable or manageable through preventive measures and lifestyle changes</h1>
// // // // // // // // 			{/* Bar chart section */}
// // // // // // // // 			<div id='bar-chart' className='border-b dark:border-gray-700'>
// // // // // // // // 				<Chart
// // // // // // // // 					options={chartOptions}
// // // // // // // // 					series={chartOptions.series}
// // // // // // // // 					type='bar'
// // // // // // // // 					height={580}
// // // // // // // // 				/>
// // // // // // // // 			</div>
// // // // // // // // 			<div className='dark:text-white-bg2 p-4'>
// // // // // // // // 				we’re committed to supporting you in managing your health, no matter
// // // // // // // // 				where you are in your journey. We understand that living with disease
// // // // // // // // 				can be challenging, but we want you to know that you’re not alone. Our
// // // // // // // // 				team is here to provide you with personalized guidance, resources, and
// // // // // // // // 				support. Together, we can create a plan that helps you take control of
// // // // // // // // 				your health, learn more about your condition, prevent complications, and
// // // // // // // // 				improve your quality of life. Gain access to personalized support. Get
// // // // // // // // 				Support Now Around 80% of the top 10 causes of death are preventable or
// // // // // // // // 				manageable through preventive measures and lifestyle changes
// // // // // // // // 			</div>
// // // // // // // // 		</div>
// // // // // // // // 	);
// // // // // // // // };

// // // // // // // // export default BarCharts;
// // // // // // // import React from 'react';
// // // // // // // import Chart from 'react-apexcharts';

// // // // // // // const BarCharts = () => {
// // // // // // // 	const chartOptions = {
// // // // // // // 		series: [
// // // // // // // 			{
// // // // // // // 				name: 'Deaths',
// // // // // // // 				color: '#e55e72', // Bar color
// // // // // // // 				data: [9.1, 8.8, 6.8, 3.4, 2.5, 1.9, 1.8, 1.6, 1.3, 1.25],
// // // // // // // 			},
// // // // // // // 		],
// // // // // // // 		chart: {
// // // // // // // 			type: 'bar',
// // // // // // // 			height: 600,
// // // // // // // 			toolbar: {
// // // // // // // 				show: false,
// // // // // // // 			},
// // // // // // // 			zoom: {
// // // // // // // 				enabled: false, // Disable zoom functionality
// // // // // // // 			},
// // // // // // // 		},
// // // // // // // 		plotOptions: {
// // // // // // // 			bar: {
// // // // // // // 				horizontal: true,
// // // // // // // 				columnWidth: '60%',
// // // // // // // 				borderRadius: 6,
// // // // // // // 				dataLabels: {
// // // // // // // 					position: 'top',
// // // // // // // 				},
// // // // // // // 			},
// // // // // // // 		},
// // // // // // // 		dataLabels: {
// // // // // // // 			enabled: false,
// // // // // // // 			style: {
// // // // // // // 				fontSize: '1.5rem',
// // // // // // // 				fontWeight: 'bold',
// // // // // // // 				colors: ['#fff'],
// // // // // // // 			},
// // // // // // // 			formatter: (value) => value + ' M',
// // // // // // // 		},
// // // // // // // 		xaxis: {
// // // // // // // 			categories: [
// // // // // // // 				'Ischaemic Heart Disease Chronic Obstructive Pulmonary Disease',
// // // // // // // 				'COVID-19',
// // // // // // // 				'Stroke',
// // // // // // // 				'Chronic Obstructive Pulmonary Disease',
// // // // // // // 				'Lower Respiratory Infections',
// // // // // // // 				'Trachea, Bronchus, Lung Cancers',
// // // // // // // 				'Alzheimer Disease and other Dementias',
// // // // // // // 				'Diabetes Mellitus',
// // // // // // // 				'Kidney Diseases',
// // // // // // // 				'Tuberculosis',
// // // // // // // 			],
// // // // // // // 			labels: {
// // // // // // // 				style: {
// // // // // // // 					fontWeight: 'bold',
// // // // // // // 					fontSize: '1rem',
// // // // // // // 					colors: '#fff',
// // // // // // // 				},
// // // // // // // 				maxWidth: 1000, // Increase width to fit longer labels
// // // // // // // 			},
// // // // // // // 			tickPlacement: 'on',
// // // // // // // 		},
// // // // // // // 		grid: {
// // // // // // // 			show: false,
// // // // // // // 			strokeDashArray: 2,
// // // // // // // 		},
// // // // // // // 		yaxis: {
// // // // // // // 			labels: {
// // // // // // // 				style: {
// // // // // // // 					fontWeight: 'bold',
// // // // // // // 					fontSize: '1.2rem',
// // // // // // // 					colors: '#1e90ff',
// // // // // // // 				},
// // // // // // // 			},
// // // // // // // 		},
// // // // // // // 		tooltip: {
// // // // // // // 			enabled: true,
// // // // // // // 			y: {
// // // // // // // 				formatter: (value) => value + ' M', // Adding "M" in tooltip values
// // // // // // // 			},
// // // // // // // 		},
// // // // // // // 	};

// // // // // // // 	return (
// // // // // // // 		<div className='w-full h-full bg-white-bg3 rounded-lg shadow dark:bg-black p-4 md:px-6'>
// // // // // // // 			<h1 className='text-3xl dark:text-white-bg2'>Around 80% of the top 10 causes of death are preventable or manageable through preventive measures and lifestyle changes</h1>
// // // // // // // 			{/* Bar chart section */}
// // // // // // // 			<div id='bar-chart' className='w-1/2 border-b dark:border-gray-700'>
// // // // // // // 				<Chart
// // // // // // // 					options={chartOptions}
// // // // // // // 					series={chartOptions.series}
// // // // // // // 					type='bar'
// // // // // // // 					height={580}
// // // // // // // 				/>
// // // // // // // 			</div>
// // // // // // // 			<div className='dark:text-white-bg2 p-4'>
// // // // // // // 				we’re committed to supporting you in managing your health, no matter
// // // // // // // 				where you are in your journey. We understand that living with disease
// // // // // // // 				can be challenging, but we want you to know that you’re not alone. Our
// // // // // // // 				team is here to provide you with personalized guidance, resources, and
// // // // // // // 				support. Together, we can create a plan that helps you take control of
// // // // // // // 				your health, learn more about your condition, prevent complications, and
// // // // // // // 				improve your quality of life. Gain access to personalized support. Get
// // // // // // // 				Support Now Around 80% of the top 10 causes of death are preventable or
// // // // // // // 				manageable through preventive measures and lifestyle changes
// // // // // // // 			</div>
// // // // // // // 		</div>
// // // // // // // 	);
// // // // // // // };

// // // // // // // export default BarCharts;
// // // // // // import React from 'react';
// // // // // // import Chart from 'react-apexcharts';

// // // // // // const BarCharts = () => {
// // // // // // 	const chartOptions = {
// // // // // // 		series: [
// // // // // // 			{
// // // // // // 				name: 'Deaths',
// // // // // // 				color: '#e55e72', // Bar color
// // // // // // 				data: [9.1, 8.8, 6.8, 3.4, 2.5, 1.9, 1.8, 1.6, 1.3, 1.25],
// // // // // // 			},
// // // // // // 		],
// // // // // // 		chart: {
// // // // // // 			type: 'bar',
// // // // // // 			height: '100%', // Make chart height responsive
// // // // // // 			toolbar: {
// // // // // // 				show: false,
// // // // // // 			},
// // // // // // 			zoom: {
// // // // // // 				enabled: false, // Disable zoom functionality
// // // // // // 			},
// // // // // // 		},
// // // // // // 		plotOptions: {
// // // // // // 			bar: {
// // // // // // 				horizontal: true,
// // // // // // 				columnWidth: '50%', // Slightly reduce column width for better fit
// // // // // // 				borderRadius: 6,
// // // // // // 				dataLabels: {
// // // // // // 					position: 'top',
// // // // // // 				},
// // // // // // 			},
// // // // // // 		},
// // // // // // 		dataLabels: {
// // // // // // 			enabled: false,
// // // // // // 			style: {
// // // // // // 				fontSize: '1rem',
// // // // // // 				fontWeight: 'bold',
// // // // // // 				colors: ['#fff'],
// // // // // // 			},
// // // // // // 			formatter: (value) => value + ' M',
// // // // // // 		},
// // // // // // 		xaxis: {
// // // // // // 			categories: [
// // // // // // 				'Ischaemic Heart Disease Chronic Obstructive Pulmonary Disease',
// // // // // // 				'COVID-19',
// // // // // // 				'Stroke',
// // // // // // 				'Chronic Obstructive Pulmonary Disease',
// // // // // // 				'Lower Respiratory Infections',
// // // // // // 				'Trachea, Bronchus, Lung Cancers',
// // // // // // 				'Alzheimer Disease and other Dementias',
// // // // // // 				'Diabetes Mellitus',
// // // // // // 				'Kidney Diseases',
// // // // // // 				'Tuberculosis',
// // // // // // 			],
// // // // // // 			labels: {
// // // // // // 				style: {
// // // // // // 					fontWeight: 'bold',
// // // // // // 					fontSize: '0.85rem', // Adjust font size for responsiveness
// // // // // // 					colors: '#fff',
// // // // // // 				},
// // // // // // 				maxWidth: 1000,
// // // // // // 				trim: true, // Trim longer labels for smaller screens
// // // // // // 			},
// // // // // // 			tickPlacement: 'on',
// // // // // // 		},
// // // // // // 		grid: {
// // // // // // 			show: false,
// // // // // // 			strokeDashArray: 2,
// // // // // // 		},
// // // // // // 		yaxis: {
// // // // // // 			labels: {
// // // // // // 				style: {
// // // // // // 					fontWeight: 'bold',
// // // // // // 					fontSize: '1rem', // Adjusted font size for mobile
// // // // // // 					colors: '#1e90ff',
// // // // // // 				},
// // // // // // 			},
// // // // // // 		},
// // // // // // 		tooltip: {
// // // // // // 			enabled: true,
// // // // // // 			y: {
// // // // // // 				formatter: (value) => value + ' M', // Adding "M" in tooltip values
// // // // // // 			},
// // // // // // 		},
// // // // // // 	};

// // // // // // 	return (
// // // // // // 		<div className='w-full h-full bg-white-bg3 rounded-lg shadow dark:bg-black p-4 md:px-6'>
// // // // // // 			<h1 className='text-xl md:text-2xl lg:text-3xl dark:text-white-bg2 mb-4'>
// // // // // // 				Around 80% of the top 10 causes of death are preventable or manageable through preventive measures and lifestyle changes
// // // // // // 			</h1>
// // // // // // 			{/* Bar chart section */}
// // // // // // 			<div
// // // // // // 				id='bar-chart'
// // // // // // 				className='w-full lg:w-2/3 xl:w-1/2 border-b dark:border-gray-700 mb-6'
// // // // // // 			>
// // // // // // 				<Chart
// // // // // // 					options={chartOptions}
// // // // // // 					series={chartOptions.series}
// // // // // // 					type='bar'
// // // // // // 					height='400px' // Set height to 400px for better responsiveness
// // // // // // 				/>
// // // // // // 			</div>
// // // // // // 			<div className='dark:text-white-bg2 text-sm md:text-base lg:text-lg'>
// // // // // // 				We’re committed to supporting you in managing your health, no matter where you are in your journey. We understand that living with disease can be challenging, but we want you to know that you’re not alone. Our team is here to provide you with personalized guidance, resources, and support. Together, we can create a plan that helps you take control of your health, learn more about your condition, prevent complications, and improve your quality of life. Gain access to personalized support. Get Support Now. Around 80% of the top 10 causes of death are preventable or manageable through preventive measures and lifestyle changes.
// // // // // // 			</div>
// // // // // // 		</div>
// // // // // // 	);
// // // // // // };

// // // // // // export default BarCharts;

// // // // import React from 'react';
// // // // import {
// // // // 	BarChart,
// // // // 	Bar,
// // // // 	XAxis,
// // // // 	YAxis,
// // // // 	CartesianGrid,
// // // // 	Tooltip,
// // // // 	ResponsiveContainer,
// // // // 	LabelList,
// // // // } from 'recharts';

// // // // const data = [
// // // // 	{ name: 'Ischaemic Heart Disease', deaths: 9.1 },
// // // // 	{ name: 'COVID-19', deaths: 8.8 },
// // // // 	{ name: 'Stroke', deaths: 6.8 },
// // // // 	{ name: 'Chronic Obstructive Pulmonary Disease', deaths: 3.4 },
// // // // 	{ name: 'Lower Respiratory Infections', deaths: 2.5 },
// // // // 	{ name: 'Trachea, Bronchus, Lung Cancers', deaths: 1.9 },
// // // // 	{ name: 'Alzheimer Disease and other Dementias', deaths: 1.8 },
// // // // 	{ name: 'Diabetes Mellitus', deaths: 1.6 },
// // // // 	{ name: 'Kidney Diseases', deaths: 1.3 },
// // // // 	{ name: 'Tuberculosis', deaths: 1.25 },
// // // // ];

// // // // // Custom Tick Component for the X-Axis
// // // // const CustomXAxisTick = ({ x, y, payload }) => {
// // // // 	const words = payload.value.split(' ');
// // // // 	return (
// // // // 		<g transform={`translate(${x},${y})`}>
// // // // 			<text
// // // // 				x={0}
// // // // 				y={0}
// // // // 				textAnchor='middle'
// // // // 				fill='#333'
// // // // 				fontSize={12}
// // // // 				fontFamily='Helvetica, Arial, sans-serif'
// // // // 			>
// // // // 				{words.map((word, index) => (
// // // // 					<tspan key={index} x='0' dy={index === 0 ? 0 : 14}>
// // // // 						{word}
// // // // 					</tspan>
// // // // 				))}
// // // // 			</text>
// // // // 		</g>
// // // // 	);
// // // // };

// // // // const BarCharts = () => {
// // // // 	return (
// // // // 		<ResponsiveContainer width='100%' height={600}>
// // // // 			<BarChart
// // // // 				data={data}
// // // // 				margin={{ top: 20, right: 30, left: 20, bottom: 70 }}
// // // // 			>
// // // // 				<CartesianGrid strokeDasharray='3 3' />
// // // // 				<XAxis
// // // // 					dataKey='name'
// // // // 					interval={0} // Show all labels
// // // // 					tick={<CustomXAxisTick />} // Use the custom tick component
// // // // 				/>
// // // // 				<YAxis />
// // // // 				<Tooltip formatter={(value) => `${value} M`} />
// // // // 				<Bar dataKey='deaths' fill='#e55e72' barSize={40}>
// // // // 					<LabelList
// // // // 						dataKey='deaths'
// // // // 						position='top'
// // // // 						formatter={(value) => `${value} M`}
// // // // 					/>
// // // // 				</Bar>
// // // // 			</BarChart>
// // // // 		</ResponsiveContainer>
// // // // 	);
// // // // };

// // // // export default BarCharts;
// // // import React from 'react';
// // // import {
// // // 	BarChart,
// // // 	Bar,
// // // 	XAxis,
// // // 	YAxis,
// // // 	CartesianGrid,
// // // 	Tooltip,
// // // 	ResponsiveContainer,
// // // 	LabelList,
// // // } from 'recharts';

// // // const data = [
// // // 	{ name: 'Ischaemic Heart Disease', deaths: 9.1 },
// // // 	{ name: 'COVID-19', deaths: 8.8 },
// // // 	{ name: 'Stroke', deaths: 6.8 },
// // // 	{ name: 'Chronic Obstructive Pulmonary Disease', deaths: 3.4 },
// // // 	{ name: 'Lower Respiratory Infections', deaths: 2.5 },
// // // 	{ name: 'Trachea, Bronchus, Lung Cancers', deaths: 1.9 },
// // // 	{ name: 'Alzheimer Disease and other Dementias', deaths: 1.8 },
// // // 	{ name: 'Diabetes Mellitus', deaths: 1.6 },
// // // 	{ name: 'Kidney Diseases', deaths: 1.3 },
// // // 	{ name: 'Tuberculosis', deaths: 1.25 },
// // // ];

// // // // Custom Tick Component for the X-Axis
// // // const CustomXAxisTick = ({ x, y, payload }) => {
// // // 	const words = payload.value.split(' ');
// // // 	return (
// // // 		<g transform={`translate(${x},${y})`}>
// // // 			<text
// // // 				x={0}
// // // 				y={0}
// // // 				textAnchor='middle'
// // // 				fill='#fff'
// // // 				fontSize={12}

// // // 				fontFamily='Helvetica, Arial, sans-serif'
// // // 			>
// // // 				{words.map((word, index) => (
// // // 					<tspan key={index} x='0' dy={index === 0 ? 0 : 14}>
// // // 						{word}
// // // 					</tspan>
// // // 				))}
// // // 			</text>
// // // 		</g>
// // // 	);
// // // };

// // // const BarCharts = () => {
// // // 	return (
// // // 		<ResponsiveContainer width='50%' height={600}>
// // // 			<BarChart
// // // 				data={data}
// // // 				margin={{ top: 20, right: 30, left: 20, bottom: 70 }}
// // // 			>
// // // 				<CartesianGrid strokeDasharray='3 3' />
// // // 				<XAxis
// // // 					dataKey='name'
// // // 					interval={0} // Show all labels
// // // 					tick={<CustomXAxisTick />} // Use the custom tick component
// // // 				/>
// // // 				<YAxis />
// // // 				<Tooltip formatter={(value) => `${value} M`} />
// // // 				<Bar
// // // 					dataKey='deaths'
// // // 					fill='#e55e72' // Bar color
// // // 					barSize={50} // Adjust bar width
// // // 					radius={[10, 10, 0, 0]} // Rounded corners on top
// // // 					shadowColor='rgba(0, 0, 0, 0.3)' // Adding shadow to bars
// // // 					shadowOffset={2} // Shadow offset for depth
// // // 				>
// // // 					<LabelList
// // // 						dataKey='deaths'
// // // 						position='top'
// // // 						formatter={(value) => `${value} M`}
// // // 					/>
// // // 				</Bar>
// // // 			</BarChart>
// // // 		</ResponsiveContainer>
// // // 	);
// // // };

// // // export default BarCharts;

// // import React from 'react';
// // import {
// // 	BarChart,
// // 	Bar,
// // 	XAxis,
// // 	YAxis,
// // 	CartesianGrid,
// // 	Tooltip,
// // 	ResponsiveContainer,
// // 	LabelList,
// // } from 'recharts';

// // const data = [
// // 	{ name: 'Ischaemic Heart Disease', deaths: 9.1 },
// // 	{ name: 'COVID-19', deaths: 8.8 },
// // 	{ name: 'Stroke', deaths: 6.8 },
// // 	{ name: 'Chronic Obstructive Pulmonary Disease', deaths: 3.4 },
// // 	{ name: 'Lower Respiratory Infections', deaths: 2.5 },
// // 	{ name: 'Trachea, Bronchus, Lung Cancers', deaths: 1.9 },
// // 	{ name: 'Alzheimer Disease & other Dementias', deaths: 1.8 },
// // 	{ name: 'Diabetes Mellitus', deaths: 1.6 },
// // 	{ name: 'Kidney Diseases', deaths: 1.3 },
// // 	{ name: 'Tuberculosis', deaths: 1.25 },
// // ];

// // // Custom Tick Component for the X-Axis
// // const CustomXAxisTick = ({ x, y, payload }) => {
// // 	const words = payload.value.split(' ');
// // 	return (
// // 		<g transform={`translate(${x},${y})`}>
// // 			<text
// // 				x={0}
// // 				y={10}
// // 				textAnchor='middle'
// // 				fill='#fff'
// // 				fontSize={12}
// // 				fontFamily='Helvetica, Arial, sans-serif'
// // 			>
// // 				{words.map((word, index) => (
// // 					<tspan key={index} x='0' dy={index === 0 ? 0 : 18}>
// // 						{' '}
// // 						{/* Increased space between words */}
// // 						{word}
// // 					</tspan>
// // 				))}
// // 			</text>
// // 		</g>
// // 	);
// // };

// // const BarCharts = () => {
// // 	return (
// // 		<div
// // 			className='chart-container w-full flex flex-col'
// // 			// style={{ width: '100%', padding: '0 10px' }}
// // 		>
// // 			<div className='flex flex-wrap md:flex-nowrap w-full'>
// // 				{/* Fully responsive container */}
// // 				<ResponsiveContainer width='100%' height={400}>
// // 					{' '}
// // 					{/* Dynamic width and height */}
// // 					<BarChart
// // 						data={data}
// // 						margin={{ top: 20, right: 30, left: 20, bottom: 70 }}
// // 					>
// // 						{/* Reduced grid opacity */}
// // 						<CartesianGrid stroke='#222' strokeDasharray='3 3' />
// // 						<XAxis
// // 							dataKey='name'
// // 							interval={0} // Show all labels
// // 							tick={<CustomXAxisTick />} // Use the custom tick component
// // 						/>
// // 						<YAxis />
// // 						<Tooltip formatter={(value) => `${value} M`} />
// // 						<Bar
// // 							dataKey='deaths'
// // 							fill='#e55e72' // Bar color
// // 							barSize={50} // Adjust bar width
// // 							radius={[10, 10, 0, 0]} // Rounded corners on top
// // 							shadowColor='rgba(0, 0, 0, 0.3)' // Adding shadow to bars
// // 							shadowOffset={2} // Shadow offset for depth
// // 						>
// // 							<LabelList
// // 								dataKey='deaths'
// // 								position='top'
// // 								formatter={(value) => `${value} M`}
// // 							/>
// // 						</Bar>
// // 					</BarChart>
// // 				</ResponsiveContainer>

// // 				<div className='w-full md:w-1/2 flex items-center justify-center p-4'>
// // 					<h1 className='text-3xl text-center md:text-left dark:text-white-bg2'>
// // 						Around 80% of the top 10 causes of death are preventable or
// // 						manageable through preventive measures and lifestyle changes
// // 					</h1>
// // 				</div>
// // 			</div>

// // 			<div className='w-full mt-8 text-center dark:text-white-bg2 p-4'>
// // 				<p>
// // 					We’re committed to supporting you in managing your health, no matter
// // 					where you are in your journey. We understand that living with disease
// // 					can be challenging, but we want you to know that you’re not alone. Our
// // 					team is here to provide you with personalized guidance, resources, and
// // 					support. Together, we can create a plan that helps you take control of
// // 					your health, learn more about your condition, prevent complications,
// // 					and improve your quality of life. Gain access to personalized support.
// // 					Get Support Now.
// // 				</p>
// // 			</div>
// // 		</div>
// // 	);
// // };

// // export default BarCharts;

// import React, { useState, useEffect } from 'react';
// import {
// 	BarChart,
// 	Bar,
// 	XAxis,
// 	YAxis,
// 	CartesianGrid,
// 	Tooltip,
// 	ResponsiveContainer,
// 	LabelList,
// } from 'recharts';

// const data = [
// 	{ name: 'Ischaemic Heart Disease', deaths: 9.1 },
// 	{ name: 'COVID-19', deaths: 8.8 },
// 	{ name: 'Stroke', deaths: 6.8 },
// 	{ name: 'Chronic Obstructive Pulmonary Disease', deaths: 3.4 },
// 	{ name: 'Lower Respiratory Infections', deaths: 2.5 },
// 	{ name: 'Trachea, Bronchus, Lung Cancers', deaths: 1.9 },
// 	{ name: 'Alzheimer Disease & other Dementias', deaths: 1.8 },
// 	{ name: 'Diabetes Mellitus', deaths: 1.6 },
// 	{ name: 'Kidney Diseases', deaths: 1.3 },
// 	{ name: 'Tuberculosis', deaths: 1.25 },
// ];

// const CustomXAxisTick = ({ x, y, payload }) => {
// 	const [isMobile, setIsMobile] = useState(false);

// 	// Update the mobile status on window resize
// 	useEffect(() => {
// 		const handleResize = () => {
// 			setIsMobile(window.innerWidth < 600); // Set the mobile flag based on screen width
// 		};

// 		handleResize(); // Set the initial state
// 		window.addEventListener('resize', handleResize); // Add resize listener

// 		return () => window.removeEventListener('resize', handleResize); // Cleanup on unmount
// 	}, []);

// 	// Split words based on spaces
// 	let words = payload.value.split(' ');

// 	// Special case for 'Alzheimer Disease & other Dementias'
// 	if (payload.value === 'Alzheimer Disease & other Dementias') {
// 		words = ['Alzheimer Disease', '& other', 'Dementias']; // Modify array without reassigning `const`
// 	}

// 	return (
// 		<g transform={`translate(${x},${y})`}>
// 			<text
// 				x={0}
// 				y={0}
// 				textAnchor='top'
// 				fill='#fff'
// 				fontSize={isMobile ? 10 : 12} // Dynamically adjust font size for mobile
// 				fontFamily='Helvetica, Arial, sans-serif'
// 				transform={isMobile ? 'rotate(-90)' : ''}
// 			>
// 				{words.map((word, index) => (
// 					<tspan key={index} x='0' dy={index === 0 ? 0 : 18}>
// 						{word}
// 					</tspan>
// 				))}
// 			</text>
// 		</g>
// 	);
// };

// const BarCharts = () => {
// 	return (
// 		<div className='chart-container w-full flex flex-col'>
// 			<div className='flex flex-wrap md:flex-nowrap w-full'>
// 				{/* Fully responsive container */}
// 				<ResponsiveContainer width='100%' height={500}>
// 					<BarChart
// 						data={data}
// 						margin={{ top: 20, right: 30, left: 20, bottom: 70 }}
// 					>
// 						{/* Reduced grid opacity */}
// 						<CartesianGrid stroke='#222' strokeDasharray='2 2' />
// 						<XAxis
// 							dataKey='name'
// 							interval={0} // Show all labels
// 							tick={<CustomXAxisTick />} // Use the custom tick component
// 						/>
// 						<YAxis />
// 						<Tooltip formatter={(value) => `${value} M`} />
// 						<Bar
// 							dataKey='deaths'
// 							fill='#e55e72' // Bar color
// 							barSize={50} // Adjust bar width
// 							radius={[10, 10, 0, 0]} // Rounded corners on top
// 							shadowColor='rgba(0, 0, 0, 0.3)' // Adding shadow to bars
// 							shadowOffset={2} // Shadow offset for depth
// 						>
// 							<LabelList
// 								dataKey='deaths'
// 								position='top'
// 								formatter={(value) => `${value} M`}
// 							/>
// 						</Bar>
// 					</BarChart>
// 				</ResponsiveContainer>
// 			</div>

// 			<div className='w-full mt-8 text-center dark:text-white-bg2 p-4'>
// 				<p>
// 					We’re committed to supporting you in managing your health, no matter
// 					where you are in your journey. We understand that living with disease
// 					can be challenging, but we want you to know that you’re not alone. Our
// 					team is here to provide you with personalized guidance, resources, and
// 					support. Together, we can create a plan that helps you take control of
// 					your health, learn more about your condition, prevent complications,
// 					and improve your quality of life. Gain access to personalized support.
// 					Get Support Now.
// 				</p>
// 			</div>
// 		</div>
// 	);
// };

// export default BarCharts;
import React, { useState, useEffect } from 'react';
import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
	LabelList,
} from 'recharts';

const data = [
	{ name: 'Ischaemic Heart Disease', deaths: 9.1 },
	{ name: 'COVID-19', deaths: 8.8 },
	{ name: 'Stroke', deaths: 6.8 },
	{ name: 'Chronic Obstructive Pulmonary Disease', deaths: 3.4 },
	{ name: 'Lower Respiratory Infections', deaths: 2.5 },
	{ name: 'Trachea, Bronchus, Lung Cancers', deaths: 1.9 },
	{ name: 'Alzheimer Disease & other Dementias', deaths: 1.8 },
	{ name: 'Diabetes Mellitus', deaths: 1.6 },
	{ name: 'Kidney Diseases', deaths: 1.3 },
	{ name: 'Tuberculosis', deaths: 1.25 },
];

const CustomXAxisTick = ({ x, y, payload }) => {
	const [isMobile, setIsMobile] = useState(false);

	// Update the mobile status on window resize
	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth < 600); // Set the mobile flag based on screen width
		};

		handleResize(); // Set the initial state
		window.addEventListener('resize', handleResize); // Add resize listener

		return () => window.removeEventListener('resize', handleResize); // Cleanup on unmount
	}, []);

	// Split words based on spaces
	let words = payload.value.split(' ');

	// Special case for 'Alzheimer Disease & other Dementias'
	if (payload.value === 'Alzheimer Disease & other Dementias') {
		words = ['Alzheimer Disease', '& other', 'Dementias']; // Modify array without reassigning `const`
	}

	return (
		<g transform={`translate(${x},${y})`}>
			<text
				x={0}
				y={10}
				textAnchor='middle'
				fill='#fff'
				fontSize={isMobile ? 10 : 12} // Dynamically adjust font size for mobile
				fontFamily='Helvetica, Arial, sans-serif'
				transform={isMobile ? 'rotate(-90)' : ''} // Rotate text vertically on mobile
			>
				{words.map((word, index) => (
					<tspan key={index} x='0' dy={index === 0 ? 0 : 18}>
						{word}
					</tspan>
				))}
			</text>
		</g>
	);
};

const BarCharts = () => {
	return (
		<div className='chart-container w-full flex flex-col'>
			<div className='flex flex-wrap md:flex-nowrap w-full'>
				<div className='flex flex-wrap md:flex-nowrap w-full'>
					{/* Fully responsive container */}
					<ResponsiveContainer width='100%' height={500}>
						<BarChart
							data={data}
							margin={{ top: 20, right: 0, left: 0, bottom: 70 }}
						>
							{/* Reduced grid opacity */}
							<CartesianGrid stroke='#222' strokeDasharray='2 2' />
							<XAxis
								dataKey='name'
								interval={0} // Show all labels
								tick={<CustomXAxisTick />} // Use the custom tick component
							/>
							<YAxis />
							<Tooltip formatter={(value) => `${value} M`} />
							<Bar
								dataKey='deaths'
								fill='#e55e72' // Bar color
								barSize={50} // Adjust bar width
								radius={[10, 10, 0, 0]} // Rounded corners on top
								shadowColor='rgba(0, 0, 0, 0.3)' // Adding shadow to bars
								shadowOffset={2} // Shadow offset for depth
							>
								{/* Display labels inside the bar for larger screen and above for smaller screens */}
								<LabelList
									dataKey='deaths'
									position='inside'
									fill='#fff'
									fontSize={12}
									formatter={(value) => `${value} M`}
								/>
							</Bar>
						</BarChart>
					</ResponsiveContainer>
				</div>

				<div className='w-full md:w-1/2 flex items-center justify-center p-4'>
					<h1 className='text-3xl text-center md:text-left dark:text-white-bg2'>
						Around 80% of the top 10 causes of death are preventable or
						manageable through preventive measures and lifestyle changes
					</h1>
				</div>
			</div>

			<div className='w-full mt-8 text-center dark:text-white-bg2 p-4'>
				<p>
					We’re committed to supporting you in managing your health, no matter
					where you are in your journey. We understand that living with disease
					can be challenging, but we want you to know that you’re not alone. Our
					team is here to provide you with personalized guidance, resources, and
					support. Together, we can create a plan that helps you take control of
					your health, learn more about your condition, prevent complications,
					and improve your quality of life. Gain access to personalized support.
					Get Support Now.
				</p>
			</div>
		</div>
	);
};

export default BarCharts;
