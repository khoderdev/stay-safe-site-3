// function ScrollPanel({ props, children }) {
//   return <div id={props.target} style={{ height: '200px', width: '100%', overflowY: 'scroll', border: '1px solid gray' }}>
//     <div style={{ height: '800px', width: '100%' }}>
//       {children}
//     </div>
//   </div>
// }

// export default ScrollPanel;

function ScrollPanel({ target = "defaultTarget", children }) {
  return (
    <div
      id={target}
      style={{
        height: '100dvh',
        width: '100%',
        overflowY: 'scroll',
      }}
    >
      <div style={{ height: '100dvh', width: '100%' }}>
        {children}
      </div>
    </div>
  );
}

export default ScrollPanel;
