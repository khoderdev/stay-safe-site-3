// components/Heading.js
import React from 'react';

export default function Heading({ text, style }) {
  return <h1 style={style}>{text || "Default Heading"}</h1>;
}
