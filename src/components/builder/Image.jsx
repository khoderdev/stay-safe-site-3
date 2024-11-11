// components/Image.js
import React from 'react';

export default function Image({ src, style }) {
  return <img src={src || "https://via.placeholder.com/150"} alt="Added" style={style} />;
}
