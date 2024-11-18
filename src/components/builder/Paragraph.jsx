// components/Paragraph.js
import React from 'react';

export default function Paragraph({ text, style }) {
  return <p style={style}>{text || "Default Paragraph"}</p>;
}
