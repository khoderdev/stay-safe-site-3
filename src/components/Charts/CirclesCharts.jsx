// import React, { useEffect, useRef } from 'react';
// import { Chart } from '@antv/g2';

// const VennChart = () => {
//   // Create a ref to attach the chart to a container div
//   const chartContainerRef = useRef(null);

//   useEffect(() => {
//     // Initialize the chart only after the component has mounted
//     const chart = new Chart({
//       container: chartContainerRef.current, // Use the ref as the container
//       autoFit: true,
//     });

//     chart
//       .path()
//       .data({
//         type: 'fetch',
//         value: 'https://assets.antv.antgroup.com/g2/lastfm.json',
//         transform: [
//           {
//             type: 'venn',
//             padding: 8,
//             sets: 'sets',
//             size: 'size',
//             as: ['key', 'path'],
//           },
//         ],
//       })
//       .encode('d', 'path')
//       .encode('color', 'key')
//       .label({
//         position: 'inside',
//         text: (d) => d.label || '',
//         transform: [{ type: 'contrastReverse' }],
//       })
//       .style('opacity', (d) => (d.sets.length > 1 ? 0.001 : 0.5))
//       .state('inactive', { opacity: 0.2 })
//       .state('active', { opacity: 0.8 })
//       .interaction('elementHighlight', true)
//       .legend(false);

//     chart.render();

//     // Cleanup the chart on component unmount
//     return () => {
//       chart.destroy();
//     };
//   }, []);

//   return (
//     <div>
//       {/* Container for the chart */}
//       <div ref={chartContainerRef} style={{ width: '100%', height: '1000px' }}></div>
//     </div>
//   );
// };

// export default VennChart;
import React, { useEffect, useRef } from 'react';
import { Chart } from '@antv/g2';

const VennChart = () => {
  // Create a ref to attach the chart to a container div
  const chartContainerRef = useRef(null);

  useEffect(() => {
    // Initialize the chart only after the component has mounted
    const chart = new Chart({
      container: chartContainerRef.current, // Use the ref as the container
      autoFit: true,
    });

    chart
      .path()
      .data({
        type: 'fetch',
        value: 'https://assets.antv.antgroup.com/g2/lastfm.json',
        transform: [
          {
            type: 'venn',
            padding: 50, // Significantly increase padding to separate circles
            sets: 'sets',
            size: 'size',
            as: ['key', 'path'],
          },
        ],
      })
      .encode('d', 'path')
      .encode('color', 'key')
      .label({
        position: 'inside',
        text: (d) => d.label || '',
        transform: [{ type: 'contrastReverse' }],
      })
      .style('opacity', (d) => (d.sets.length > 1 ? 0.2 : 0.6)) // Adjust opacity for overlaps
      .style('stroke', '#ffffff') // Add white border for visual separation
      .style('lineWidth', 5) // Increase border width for clarity
      .state('inactive', { opacity: 0.1 })
      .state('active', { opacity: 0.8 })
      .interaction('elementHighlight', true)
      .legend(true);

    chart.render();

    // Cleanup the chart on component unmount
    return () => {
      chart.destroy();
    };
  }, []);

  return (
    <div>
      {/* Container for the chart */}
      <div ref={chartContainerRef} style={{ width: '100%', height: '1000px' }}></div>
    </div>
  );
};

export default VennChart;
