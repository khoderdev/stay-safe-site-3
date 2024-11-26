// // // // // // import React from 'react';
// // // // // // import Chart from 'react-apexcharts';

// // // // // // const BarCharts = () => {
// // // // // // 	const chartOptions = {
// // // // // // 		series: [
// // // // // // 			{
// // // // // // 				name: 'Deaths',
// // // // // // 				color: '#e55e72',
// // // // // // 				data: [9.1, 8.8, 6.8, 3.4, 2.5, 1.9, 1.8, 1.6, 1.3, 1.25],
// // // // // //         formatter: (value) =>  value + ' M' ,
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
// // // // // //       formatter: (value) =>  value + ' M' ,
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
// // // // // // 		<div className='w-full h-full  bg-white-bg3 rounded-lg shadow dark:bg-black p-4 md:px-6'>
// // // // // // 			{/* Bar chart section */}
// // // // // // 			<div id='bar-chart' className='border-b dark:border-gray-700'>
// // // // // // 				<Chart
// // // // // // 					options={chartOptions}
// // // // // // 					series={chartOptions.series}
// // // // // // 					type='bar'
// // // // // // 					height={580}
// // // // // // 				/>
// // // // // // 			</div>
// // // // // // 			<div className='dark:text-white-bg2 p-4'>
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
// // // // // import React from 'react';
// // // // // import Chart from 'react-apexcharts';

// // // // // const BarCharts = () => {
// // // // // 	const chartOptions = {
// // // // // 		series: [
// // // // // 			{
// // // // // 				name: 'Deaths',
// // // // // 				color: '#e55e72', // Bar color
// // // // // 				data: [9.1, 8.8, 6.8, 3.4, 2.5, 1.9, 1.8, 1.6, 1.3, 1.25],
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
// // // // // 				columnWidth: '60%',
// // // // // 				borderRadius: 6,
// // // // // 				dataLabels: {
// // // // // 					position: 'top',
// // // // // 				},
// // // // // 			},
// // // // // 		},
// // // // // 		dataLabels: {
// // // // // 			enabled: true,
// // // // // 			style: {
// // // // // 				fontSize: '1.5rem', // Font size for data values
// // // // // 				fontWeight: 'bold',
// // // // // 				colors: ['#fff'], // Color for data values
// // // // // 			},
// // // // // 			formatter: (value) => value + ' M',
// // // // // 		},
// // // // // 		xaxis: {
// // // // // 			categories: [
// // // // // 				'Ischaemic Heart Disease',
// // // // // 				'COVID-19',
// // // // // 				'Stroke',
// // // // // 				'Chronic Obstructive Pulmonary Disease',
// // // // // 				'Lower Respiratory Infections',
// // // // // 				'Trachea, Bronchus, Lung Cancers',
// // // // // 				'Alzheimer Disease and other Dementias',
// // // // // 				'Diabetes Mellitus',
// // // // // 				'Kidney Diseases',
// // // // // 				'Tuberculosis',
// // // // // 			],
// // // // // 			labels: {
// // // // // 				style: {
// // // // //           fontWeight:"bold",
// // // // // 					fontSize: '1.2rem', // Font size for category labels
// // // // // 					colors: ['#1e90ff'], // Color for x-axis labels
// // // // // 				},
// // // // // 			},
// // // // // 		},
// // // // // 		grid: {
// // // // // 			show: true,
// // // // // 			strokeDashArray: 2,
// // // // // 		},
// // // // // 		yaxis: {
// // // // // 			labels: {
// // // // // 				style: {
// // // // //           fontWeight:"bold",
// // // // // 					fontSize: '1.2rem', // Font size for y-axis labels
// // // // // 					colors: ['#1e90ff'], // Color for y-axis labels
// // // // // 				},
// // // // // 			},
// // // // // 		},
// // // // // 	};

// // // // // 	return (
// // // // // 		<div className='w-full h-full bg-white-bg3 rounded-lg shadow dark:bg-black p-4 md:px-6'>
// // // // // 			{/* Bar chart section */}
// // // // // 			<div id='bar-chart' className='border-b dark:border-gray-700'>
// // // // // 				<Chart
// // // // // 					options={chartOptions}
// // // // // 					series={chartOptions.series}
// // // // // 					type='bar'
// // // // // 					height={580}
// // // // // 				/>
// // // // // 			</div>
// // // // // 			<div className='dark:text-white-bg2 p-4'>
// // // // // 				we’re committed to supporting you in managing your health, no matter
// // // // // 				where you are in your journey. We understand that living with disease
// // // // // 				can be challenging, but we want you to know that you’re not alone. Our
// // // // // 				team is here to provide you with personalized guidance, resources, and
// // // // // 				support. Together, we can create a plan that helps you take control of
// // // // // 				your health, learn more about your condition, prevent complications, and
// // // // // 				improve your quality of life. Gain access to personalized support. Get
// // // // // 				Support Now Around 80% of the top 10 causes of death are preventable or
// // // // // 				manageable through preventive measures and lifestyle changes
// // // // // 			</div>
// // // // // 		</div>
// // // // // 	);
// // // // // };

// // // // // export default BarCharts;
// // // // import React from 'react';
// // // // import Chart from 'react-apexcharts';

// // // // const BarCharts = () => {
// // // // 	const chartOptions = {
// // // // 		series: [
// // // // 			{
// // // // 				name: 'Deaths',
// // // // 				color: '#e55e72', // Bar color
// // // // 				data: [9.1, 8.8, 6.8, 3.4, 2.5, 1.9, 1.8, 1.6, 1.3, 1.25],
// // // // 			},
// // // // 		],
// // // // 		chart: {
// // // // 			type: 'bar',
// // // // 			height: 600,
// // // // 			toolbar: {
// // // // 				show: false,
// // // // 			},
// // // // 		},
// // // // 		plotOptions: {
// // // // 			bar: {
// // // // 				horizontal: false,
// // // // 				columnWidth: '60%',
// // // // 				borderRadius: 6,
// // // // 				dataLabels: {
// // // // 					position: 'top',
// // // // 				},
// // // // 			},
// // // // 		},
// // // // 		dataLabels: {
// // // // 			enabled: true,
// // // // 			style: {
// // // // 				fontSize: '1.5rem',
// // // // 				fontWeight: 'bold',
// // // // 				colors: ['#fff'],
// // // // 			},
// // // // 			formatter: (value) => value + ' M',
// // // // 		},
// // // // 		xaxis: {
// // // // 			categories: [
// // // // 				'Ischaemic Heart Disease',
// // // // 				'COVID-19',
// // // // 				'Stroke',
// // // // 				'Chronic Obstructive Pulmonary Disease',
// // // // 				'Lower Respiratory Infections',
// // // // 				'Trachea, Bronchus, Lung Cancers',
// // // // 				'Alzheimer Disease and other Dementias',
// // // // 				'Diabetes Mellitus',
// // // // 				'Kidney Diseases',
// // // // 				'Tuberculosis',
// // // // 			],
// // // // 			labels: {
// // // // 				style: {
// // // // 					fontWeight: 'bold',
// // // // 					fontSize: '1.2rem',
// // // // 					colors: '#fff',
// // // // 				},
// // // // 			},
// // // // 		},
// // // // 		grid: {
// // // // 			show: true,
// // // // 			strokeDashArray: 2,
// // // // 		},
// // // // 		yaxis: {
// // // // 			show: false,
// // // // 			labels: {
// // // // 				style: {
// // // // 					fontWeight: 'bold',
// // // // 					fontSize: '1.2rem',
// // // // 					colors: '#1e90ff',
// // // // 				},
// // // // 			},
// // // // 		},
// // // // 		tooltip: {
// // // // 			enabled: true,
// // // // 			y: {
// // // // 				formatter: (value) => value + ' M', // Adding "M" in tooltip values
// // // // 			},
// // // // 		},
// // // // 	};

// // // // 	return (
// // // // 		<div className='w-full h-full bg-white-bg3 rounded-lg shadow dark:bg-black p-4 md:px-6'>
// // // // 			{/* Bar chart section */}
// // // // 			<div id='bar-chart' className='border-b dark:border-gray-700'>
// // // // 				<Chart
// // // // 					options={chartOptions}
// // // // 					series={chartOptions.series}
// // // // 					type='bar'
// // // // 					height={580}
// // // // 				/>
// // // // 			</div>
// // // // 			<div className='dark:text-white-bg2 p-4'>
// // // // 				we’re committed to supporting you in managing your health, no matter
// // // // 				where you are in your journey. We understand that living with disease
// // // // 				can be challenging, but we want you to know that you’re not alone. Our
// // // // 				team is here to provide you with personalized guidance, resources, and
// // // // 				support. Together, we can create a plan that helps you take control of
// // // // 				your health, learn more about your condition, prevent complications, and
// // // // 				improve your quality of life. Gain access to personalized support. Get
// // // // 				Support Now Around 80% of the top 10 causes of death are preventable or
// // // // 				manageable through preventive measures and lifestyle changes
// // // // 			</div>
// // // // 		</div>
// // // // 	);
// // // // };

// // // // export default BarCharts;
// // // import React from 'react';
// // // import Chart from 'react-apexcharts';

// // // const BarCharts = () => {
// // // 	const chartOptions = {
// // // 		series: [
// // // 			{
// // // 				name: 'Deaths',
// // // 				color: '#e55e72', // Bar color
// // // 				data: [9.1, 8.8, 6.8, 3.4, 2.5, 1.9, 1.8, 1.6, 1.3, 1.25],
// // // 			},
// // // 		],
// // // 		chart: {
// // // 			type: 'bar',
// // // 			height: 600,
// // // 			toolbar: {
// // // 				show: false,
// // // 			},
// // // 		},
// // // 		plotOptions: {
// // // 			bar: {
// // // 				horizontal: false,
// // // 				columnWidth: '60%',
// // // 				borderRadius: 6,
// // // 				dataLabels: {
// // // 					position: 'top',
// // // 				},
// // // 			},
// // // 		},
// // // 		dataLabels: {
// // // 			enabled: true,
// // // 			style: {
// // // 				fontSize: '1.5rem',
// // // 				fontWeight: 'bold',
// // // 				colors: ['#fff'],
// // // 			},
// // // 			formatter: (value) => value + ' M',
// // // 		},
// // // 		xaxis: {
// // // 			categories: [
// // // 				'Ischaemic Heart Disease',
// // // 				'COVID-19',
// // // 				'Stroke',
// // // 				'Chronic Obstructive Pulmonary Disease',
// // // 				'Lower Respiratory Infections',
// // // 				'Trachea, Bronchus, Lung Cancers',
// // // 				'Alzheimer Disease and other Dementias',
// // // 				'Diabetes Mellitus',
// // // 				'Kidney Diseases',
// // // 				'Tuberculosis',
// // // 			],
// // // 			labels: {
// // // 				style: {
// // // 					fontWeight: 'bold',
// // // 					fontSize: '1rem',
// // // 					colors: '#fff',
// // // 					whiteSpace: 'normal',
// // // 				},
// // // 				rotate: 0,
// // // 				maxHeight: 60,
// // // 				trim: true,
// // // 			},
// // // 			tickPlacement: 'on',
// // // 		},
// // // 		grid: {
// // // 			show: true,
// // // 			strokeDashArray: 2,
// // // 		},
// // // 		yaxis: {
// // // 			show: false,
// // // 			labels: {
// // // 				style: {
// // // 					fontWeight: 'bold',
// // // 					fontSize: '1.2rem',
// // // 					colors: '#1e90ff',
// // // 				},
// // // 			},
// // // 		},
// // // 		tooltip: {
// // // 			enabled: true,
// // // 			y: {
// // // 				formatter: (value) => value + ' M',
// // // 			},
// // // 		},
// // // 	};

// // // 	return (
// // // 		<div className='w-full h-full bg-white-bg3 rounded-lg shadow dark:bg-black p-4 md:px-6'>
// // // 			<h1 className='text-3xl dark:text-white-bg2'>Around 80% of the top 10 causes of death are preventable or manageable through preventive measures and lifestyle changes</h1>
// // // 			{/* Bar chart section */}
// // // 			<div id='bar-chart' className='border-b dark:border-gray-700'>
// // // 				<Chart
// // // 					options={chartOptions}
// // // 					series={chartOptions.series}
// // // 					type='bar'
// // // 					height={580}
// // // 				/>
// // // 			</div>
// // // 			<div className='dark:text-white-bg2 p-4'>
// // // 				we’re committed to supporting you in managing your health, no matter
// // // 				where you are in your journey. We understand that living with disease
// // // 				can be challenging, but we want you to know that you’re not alone. Our
// // // 				team is here to provide you with personalized guidance, resources, and
// // // 				support. Together, we can create a plan that helps you take control of
// // // 				your health, learn more about your condition, prevent complications, and
// // // 				improve your quality of life. Gain access to personalized support. Get
// // // 				Support Now Around 80% of the top 10 causes of death are preventable or
// // // 				manageable through preventive measures and lifestyle changes
// // // 			</div>
// // // 		</div>
// // // 	);
// // // };

// // // export default BarCharts;
// // import React from 'react';
// // import Chart from 'react-apexcharts';

// // const BarCharts = () => {
// // 	const chartOptions = {
// // 		series: [
// // 			{
// // 				name: 'Deaths',
// // 				color: '#e55e72', // Bar color
// // 				data: [9.1, 8.8, 6.8, 3.4, 2.5, 1.9, 1.8, 1.6, 1.3, 1.25],
// // 			},
// // 		],
// // 		chart: {
// // 			type: 'bar',
// // 			height: 600,
// // 			toolbar: {
// // 				show: false,
// // 			},
// // 			zoom: {
// // 				enabled: false, // Disable zoom functionality
// // 			},
// // 		},
// // 		plotOptions: {
// // 			bar: {
// // 				horizontal: true,
// // 				columnWidth: '60%',
// // 				borderRadius: 6,
// // 				dataLabels: {
// // 					position: 'top',
// // 				},
// // 			},
// // 		},
// // 		dataLabels: {
// // 			enabled: false,
// // 			style: {
// // 				fontSize: '1.5rem',
// // 				fontWeight: 'bold',
// // 				colors: ['#fff'],
// // 			},
// // 			formatter: (value) => value + ' M',
// // 		},
// // 		yaxis: {
// // 			categories: [
// // 				'Ischaemic Heart Disease Chronic Obstructive Pulmonary Disease',
// // 				'COVID-19',
// // 				'Stroke',
// // 				'Chronic Obstructive Pulmonary Disease',
// // 				'Lower Respiratory Infections',
// // 				'Trachea, Bronchus, Lung Cancers',
// // 				'Alzheimer Disease and other Dementias',
// // 				'Diabetes Mellitus',
// // 				'Kidney Diseases',
// // 				'Tuberculosis',
// // 			],
// // 			labels: {
// // 				style: {
// // 					fontWeight: 'bold',
// // 					fontSize: '1rem',
// // 					colors: '#fff',
// // 				},

// // 			},
// // 			tickPlacement: 'on',
// // 		},
// // 		grid: {
// // 			show: false,
// // 			strokeDashArray: 2,
// // 		},
// // 		xaxis: {
// // 			show: false,
// // 			labels: {
// // 				style: {
// // 					fontWeight: 'bold',
// // 					fontSize: '1.2rem',
// // 					colors: '#1e90ff',
// // 				},
// // 			},
// // 		},
// // 		tooltip: {
// // 			enabled: true,
// // 			y: {
// // 				formatter: (value) => value + ' M', // Adding "M" in tooltip values
// // 			},
// // 		},
// // 	};

// // 	return (
// // 		<div className='w-full h-full bg-white-bg3 rounded-lg shadow dark:bg-black p-4 md:px-6'>
// // 			<h1 className='text-3xl dark:text-white-bg2'>Around 80% of the top 10 causes of death are preventable or manageable through preventive measures and lifestyle changes</h1>
// // 			{/* Bar chart section */}
// // 			<div id='bar-chart' className='border-b dark:border-gray-700'>
// // 				<Chart
// // 					options={chartOptions}
// // 					series={chartOptions.series}
// // 					type='bar'
// // 					height={580}
// // 				/>
// // 			</div>
// // 			<div className='dark:text-white-bg2 p-4'>
// // 				we’re committed to supporting you in managing your health, no matter
// // 				where you are in your journey. We understand that living with disease
// // 				can be challenging, but we want you to know that you’re not alone. Our
// // 				team is here to provide you with personalized guidance, resources, and
// // 				support. Together, we can create a plan that helps you take control of
// // 				your health, learn more about your condition, prevent complications, and
// // 				improve your quality of life. Gain access to personalized support. Get
// // 				Support Now Around 80% of the top 10 causes of death are preventable or
// // 				manageable through preventive measures and lifestyle changes
// // 			</div>
// // 		</div>
// // 	);
// // };

// // export default BarCharts;
// import React from 'react';
// import Chart from 'react-apexcharts';

// const BarCharts = () => {
// 	const chartOptions = {
// 		series: [
// 			{
// 				name: 'Deaths',
// 				color: '#e55e72', // Bar color
// 				data: [9.1, 8.8, 6.8, 3.4, 2.5, 1.9, 1.8, 1.6, 1.3, 1.25],
// 			},
// 		],
// 		chart: {
// 			type: 'bar',
// 			height: 600,
// 			toolbar: {
// 				show: false,
// 			},
// 			zoom: {
// 				enabled: false, // Disable zoom functionality
// 			},
// 		},
// 		plotOptions: {
// 			bar: {
// 				horizontal: true,
// 				columnWidth: '60%',
// 				borderRadius: 6,
// 				dataLabels: {
// 					position: 'top',
// 				},
// 			},
// 		},
// 		dataLabels: {
// 			enabled: false,
// 			style: {
// 				fontSize: '1.5rem',
// 				fontWeight: 'bold',
// 				colors: ['#fff'],
// 			},
// 			formatter: (value) => value + ' M',
// 		},
// 		xaxis: {
// 			categories: [
// 				'Ischaemic Heart Disease Chronic Obstructive Pulmonary Disease',
// 				'COVID-19',
// 				'Stroke',
// 				'Chronic Obstructive Pulmonary Disease',
// 				'Lower Respiratory Infections',
// 				'Trachea, Bronchus, Lung Cancers',
// 				'Alzheimer Disease and other Dementias',
// 				'Diabetes Mellitus',
// 				'Kidney Diseases',
// 				'Tuberculosis',
// 			],
// 			labels: {
// 				style: {
// 					fontWeight: 'bold',
// 					fontSize: '1rem',
// 					colors: '#fff',
// 				},
// 				maxWidth: 1000, // Increase width to fit longer labels
// 			},
// 			tickPlacement: 'on',
// 		},
// 		grid: {
// 			show: false,
// 			strokeDashArray: 2,
// 		},
// 		yaxis: {
// 			labels: {
// 				style: {
// 					fontWeight: 'bold',
// 					fontSize: '1.2rem',
// 					colors: '#1e90ff',
// 				},
// 			},
// 		},
// 		tooltip: {
// 			enabled: true,
// 			y: {
// 				formatter: (value) => value + ' M', // Adding "M" in tooltip values
// 			},
// 		},
// 	};

// 	return (
// 		<div className='w-full h-full bg-white-bg3 rounded-lg shadow dark:bg-black p-4 md:px-6'>
// 			<h1 className='text-3xl dark:text-white-bg2'>Around 80% of the top 10 causes of death are preventable or manageable through preventive measures and lifestyle changes</h1>
// 			{/* Bar chart section */}
// 			<div id='bar-chart' className='w-1/2 border-b dark:border-gray-700'>
// 				<Chart
// 					options={chartOptions}
// 					series={chartOptions.series}
// 					type='bar'
// 					height={580}
// 				/>
// 			</div>
// 			<div className='dark:text-white-bg2 p-4'>
// 				we’re committed to supporting you in managing your health, no matter
// 				where you are in your journey. We understand that living with disease
// 				can be challenging, but we want you to know that you’re not alone. Our
// 				team is here to provide you with personalized guidance, resources, and
// 				support. Together, we can create a plan that helps you take control of
// 				your health, learn more about your condition, prevent complications, and
// 				improve your quality of life. Gain access to personalized support. Get
// 				Support Now Around 80% of the top 10 causes of death are preventable or
// 				manageable through preventive measures and lifestyle changes
// 			</div>
// 		</div>
// 	);
// };

// export default BarCharts;
import React from 'react';
import Chart from 'react-apexcharts';

const BarCharts = () => {
	const chartOptions = {
		series: [
			{
				name: 'Deaths',
				color: '#e55e72', // Bar color
				data: [9.1, 8.8, 6.8, 3.4, 2.5, 1.9, 1.8, 1.6, 1.3, 1.25],
			},
		],
		chart: {
			type: 'bar',
			height: '100%', // Make chart height responsive
			toolbar: {
				show: false,
			},
			zoom: {
				enabled: false, // Disable zoom functionality
			},
		},
		plotOptions: {
			bar: {
				horizontal: true,
				columnWidth: '50%', // Slightly reduce column width for better fit
				borderRadius: 6,
				dataLabels: {
					position: 'top',
				},
			},
		},
		dataLabels: {
			enabled: false,
			style: {
				fontSize: '1rem',
				fontWeight: 'bold',
				colors: ['#fff'],
			},
			formatter: (value) => value + ' M',
		},
		xaxis: {
			categories: [
				'Ischaemic Heart Disease Chronic Obstructive Pulmonary Disease',
				'COVID-19',
				'Stroke',
				'Chronic Obstructive Pulmonary Disease',
				'Lower Respiratory Infections',
				'Trachea, Bronchus, Lung Cancers',
				'Alzheimer Disease and other Dementias',
				'Diabetes Mellitus',
				'Kidney Diseases',
				'Tuberculosis',
			],
			labels: {
				style: {
					fontWeight: 'bold',
					fontSize: '0.85rem', // Adjust font size for responsiveness
					colors: '#fff',
				},
				maxWidth: 1000,
				trim: true, // Trim longer labels for smaller screens
			},
			tickPlacement: 'on',
		},
		grid: {
			show: false,
			strokeDashArray: 2,
		},
		yaxis: {
			labels: {
				style: {
					fontWeight: 'bold',
					fontSize: '1rem', // Adjusted font size for mobile
					colors: '#1e90ff',
				},
			},
		},
		tooltip: {
			enabled: true,
			y: {
				formatter: (value) => value + ' M', // Adding "M" in tooltip values
			},
		},
	};

	return (
		<div className='w-full h-full bg-white-bg3 rounded-lg shadow dark:bg-black p-4 md:px-6'>
			<h1 className='text-xl md:text-2xl lg:text-3xl dark:text-white-bg2 mb-4'>
				Around 80% of the top 10 causes of death are preventable or manageable through preventive measures and lifestyle changes
			</h1>
			{/* Bar chart section */}
			<div
				id='bar-chart'
				className='w-full lg:w-2/3 xl:w-1/2 border-b dark:border-gray-700 mb-6'
			>
				<Chart
					options={chartOptions}
					series={chartOptions.series}
					type='bar'
					height='400px' // Set height to 400px for better responsiveness
				/>
			</div>
			<div className='dark:text-white-bg2 text-sm md:text-base lg:text-lg'>
				We’re committed to supporting you in managing your health, no matter where you are in your journey. We understand that living with disease can be challenging, but we want you to know that you’re not alone. Our team is here to provide you with personalized guidance, resources, and support. Together, we can create a plan that helps you take control of your health, learn more about your condition, prevent complications, and improve your quality of life. Gain access to personalized support. Get Support Now. Around 80% of the top 10 causes of death are preventable or manageable through preventive measures and lifestyle changes.
			</div>
		</div>
	);
};

export default BarCharts;
