import React, { useEffect, useState } from 'react';

const LEDNumberDisplay = () => {
  const [topBoxStyle, setTopBoxStyle] = useState({});
  const [bottomBoxStyle, setBottomBoxStyle] = useState({});
  
  const on = 'Snow';
  const off = 'transparent';

  const styles = {
    container: {
      marginTop: '3rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      width: '500px',
      height: '300px',
      background: '#555',
      border: 'ridge 8px BurlyWood',
      borderRadius: '30px',
      boxShadow: '0 0.6rem 0.6rem rgba(0, 0, 0, 0.33)',
    },
    box: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100px',
      height: '100px',
      background: '#555',
      borderLeft: '10px ridge transparent',
      borderRight: '10px ridge transparent',
      borderRadius: '10px',
    },
  };

  const numbers = [
    () => {
      setTopBoxStyle({ borderTopColor: on, borderLeftColor: on, borderRightColor: on, borderBottomColor: off });
      setBottomBoxStyle({ borderTopColor: off, borderLeftColor: on, borderRightColor: on, borderBottomColor: on });
    },
    () => {
      setTopBoxStyle({ borderTopColor: off, borderLeftColor: off, borderRightColor: on, borderBottomColor: off });
      setBottomBoxStyle({ borderTopColor: off, borderLeftColor: off, borderRightColor: on, borderBottomColor: off });
    },
    () => {
      setTopBoxStyle({ borderTopColor: on, borderLeftColor: off, borderRightColor: on, borderBottomColor: on });
      setBottomBoxStyle({ borderTopColor: on, borderLeftColor: on, borderRightColor: off, borderBottomColor: on });
    },
    () => {
      setTopBoxStyle({ borderTopColor: on, borderLeftColor: off, borderRightColor: on, borderBottomColor: on });
      setBottomBoxStyle({ borderTopColor: on, borderLeftColor: off, borderRightColor: on, borderBottomColor: on });
    },
    () => {
      setTopBoxStyle({ borderTopColor: off, borderLeftColor: on, borderRightColor: on, borderBottomColor: on });
      setBottomBoxStyle({ borderTopColor: on, borderLeftColor: off, borderRightColor: on, borderBottomColor: off });
    },
    () => {
      setTopBoxStyle({ borderTopColor: on, borderLeftColor: on, borderRightColor: off, borderBottomColor: on });
      setBottomBoxStyle({ borderTopColor: on, borderLeftColor: off, borderRightColor: on, borderBottomColor: on });
    },
    () => {
      setTopBoxStyle({ borderTopColor: on, borderLeftColor: on, borderRightColor: off, borderBottomColor: on });
      setBottomBoxStyle({ borderTopColor: on, borderLeftColor: on, borderRightColor: on, borderBottomColor: on });
    },
    () => {
      setTopBoxStyle({ borderTopColor: on, borderLeftColor: on, borderRightColor: on, borderBottomColor: off });
      setBottomBoxStyle({ borderTopColor: off, borderLeftColor: off, borderRightColor: on, borderBottomColor: off });
    },
    () => {
      setTopBoxStyle({ borderTopColor: on, borderLeftColor: on, borderRightColor: on, borderBottomColor: on });
      setBottomBoxStyle({ borderTopColor: on, borderLeftColor: on, borderRightColor: on, borderBottomColor: on });
    },
    () => {
      setTopBoxStyle({ borderTopColor: on, borderLeftColor: on, borderRightColor: on, borderBottomColor: on });
      setBottomBoxStyle({ borderTopColor: on, borderLeftColor: off, borderRightColor: on, borderBottomColor: on });
    },
  ];

  useEffect(() => {
    const playNumbers = () => {
      numbers.forEach((number, index) => {
        setTimeout(number, index * 1000);
      });
    };
    playNumbers();
    const interval = setInterval(playNumbers, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '3rem', background: 'DarkSeaGreen' }}>
      <h1 style={{ color: 'Navy', textShadow: '1px 1px 2px #000', fontSize: '2rem', fontFamily: 'sans-serif' }}>LED Number Display</h1>
      <div id="container" style={styles.container}>
        <div id="top-box" style={{ ...styles.box, borderTopColor: topBoxStyle.borderTopColor, borderLeftColor: topBoxStyle.borderLeftColor, borderRightColor: topBoxStyle.borderRightColor, borderBottomColor: topBoxStyle.borderBottomColor, borderBottom: '5px inset transparent' }}></div>
        <div id="bottom-box" style={{ ...styles.box, borderTopColor: bottomBoxStyle.borderTopColor, borderLeftColor: bottomBoxStyle.borderLeftColor, borderRightColor: bottomBoxStyle.borderRightColor, borderBottomColor: bottomBoxStyle.borderBottomColor, borderTop: '5px inset transparent' }}></div>
      </div>
    </div>
  );
};

export default LEDNumberDisplay;
