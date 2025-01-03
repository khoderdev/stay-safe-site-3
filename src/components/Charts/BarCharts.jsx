import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const data = [
  { name: "Ischaemic Heart Disease", deaths: 9.1 },
  { name: "COVID-19", deaths: 8.8 },
  { name: "Stroke", deaths: 6.8 },
  { name: "Chronic Obstructive Pulmonary Disease", deaths: 3.4 },
  { name: "Lower Respiratory Infections", deaths: 2.5 },
  { name: "Trachea, Bronchus, Lung Cancers", deaths: 1.9 },
  { name: "Alzheimer Disease & other Dementias", deaths: 1.8 },
  { name: "Diabetes Mellitus", deaths: 1.6 },
  { name: "Kidney Diseases", deaths: 1.3 },
  { name: "Tuberculosis", deaths: 1.25 },
];

// Prepare data for Chart.js
const chartData = {
  labels: data.map((item) => item.name),
  datasets: [
    {
      label: "Deaths (Million)",
      data: data.map((item) => item.deaths),
      backgroundColor: "#e55e72",
      borderRadius: 10, // Rounded corners for bars
    },
  ],
};

// Custom Tooltip
const customTooltip = {
  callbacks: {
    title: (context) => {
      return context[0].label;
    },
    label: (context) => {
      const deaths = context.raw;
      return `Deaths: ${deaths} Million`;
    },
  },
  bodyFont: {
    size: 14, // Base font size for tooltips
  },
  titleFont: {
    size: 16, // Base font size for tooltip titles
  },
};

const options = {
  responsive: true,
  maintainAspectRatio: false, // Allow chart to resize dynamically
  plugins: {
    tooltip: customTooltip,
    legend: {
      display: false, // Hide legend
    },
  },
  scales: {
    x: {
      display: false, // Hide X-axis labels
    },
    y: {
      display: false, // Hide Y-axis labels
    },
  },
};

const BarCharts = () => {
  return (
    <div className="w-full h-[400px] md:h-[500px] px-4 md:px-20">
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default BarCharts;