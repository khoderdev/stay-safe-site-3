// components/DragItem.js
import React from 'react';
import { useDrag } from 'react-dnd';

export default function DragItem({ type, children }) {
  const [, drag] = useDrag(() => ({
    type,
    item: { type },
  }));
  
  return (
    <div ref={drag} style={{ cursor: "move", margin: "10px 0" }}>
      {children}
    </div>
  );
}
