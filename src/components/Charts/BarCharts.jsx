import React, { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LabelList,
} from "recharts";

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

const CustomXAxisTick = ({ x, y, payload }) => {
  const [isMobile, setIsMobile] = useState(false);

  // Update the mobile status on window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 600); // Set the mobile flag based on screen width
    };

    handleResize(); // Set the initial state
    window.addEventListener("resize", handleResize); // Add resize listener

    return () => window.removeEventListener("resize", handleResize); // Cleanup on unmount
  }, []);

  // Split words based on spaces
  let words = payload.value.split(" ");

  // Special case for 'Alzheimer Disease & other Dementias'
  if (payload.value === "Alzheimer Disease & other Dementias") {
    words = ["Alzheimer Disease", "& other", "Dementias"]; // Modify array without reassigning `const`
  }

  return (
    <g transform={`translate(${x},${y})`}>
      <text
        // x={20}
        // y={10}
        x={isMobile ? 10 : 12}
        y={isMobile ? 0 : 12}
        textAnchor={isMobile ? "end" : "middle"}
        fill="#fff"
        fontSize={isMobile ? 10 : 12} // Dynamically adjust font size for mobile
        fontFamily="Helvetica, Arial, sans-serif"
        transform={isMobile ? "rotate(-90)" : ""} // Rotate text vertically on mobile
      >
        {words.map((word, index) => (
          <tspan key={index} x="0" dy={index === 0 ? 0 : 18}>
            {word}
          </tspan>
        ))}
      </text>
    </g>
  );
};

const BarCharts = () => {
  return (
    <div className="chart-container w-full flex flex-col">
      <div className="w-full md:w-1/2 flex items-center justify-center pl-10">
        <h1 className="text-3xl text-center md:text-left dark:text-white-bg2">
          Around 80% of the top 10 causes of death are preventable or manageable
          through preventive measures and lifestyle changes
        </h1>
      </div>
      <div className="flex flex-wrap md:flex-nowrap w-full">
        <div className="flex flex-wrap md:flex-nowrap w-full">
          {/* Fully responsive container */}
          <ResponsiveContainer width="100%" height={500}>
            <BarChart
              data={data}
              margin={{ top: 20, right: 0, left: 0, bottom: 70 }}
            >
              {/* Reduced grid opacity */}
              <CartesianGrid stroke="#222" strokeDasharray="2 2" />
              <XAxis
                dataKey="name"
                interval={0} // Show all labels
                tick={<CustomXAxisTick />} // Use the custom tick component
              />
              <YAxis />
              <Tooltip formatter={(value) => `${value} M`} />
              <Bar
                dataKey="deaths"
                fill="#e55e72" // Bar color
                barSize={50} // Adjust bar width
                radius={[10, 10, 0, 0]} // Rounded corners on top
                shadowColor="rgba(0, 0, 0, 0.3)" // Adding shadow to bars
                shadowOffset={2} // Shadow offset for depth
              >
                {/* Display labels inside the bar for larger screen and above for smaller screens */}
                <LabelList
                  dataKey="deaths"
                  position="inside"
                  fill="#fff"
                  fontSize={12}
                  formatter={(value) => `${value} M`}
                />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="sm:w-1/2 place-self-center mt-8 text-center dark:text-white-bg2 p-4">
        <p className="text-lg">
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
