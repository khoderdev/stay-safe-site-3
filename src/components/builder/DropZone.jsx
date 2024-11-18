// components/DropZone.js
import React from 'react';
import { useDrop } from 'react-dnd';

export default function DropZone({ onDrop, children }) {
  const [, drop] = useDrop({
    accept: ["heading", "paragraph", "image", "container"],
    drop: (item) => onDrop(item),
  });

  return (
    <div ref={drop} style={{ width:"100%", minHeight: "100%", border: "2px dashed #ccc", padding: "10px" }}>
      {children}
    </div>
  );
}
