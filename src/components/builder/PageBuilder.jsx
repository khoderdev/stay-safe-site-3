


import React, { useState } from 'react';
import DropZone from './DropZone';
import DragItem from './DragItem';
import Heading from './Heading';
import Paragraph from './Paragraph';
import Image from './Image';
import Container from './Container';

export default function PageBuilder() {
  const [elements, setElements] = useState([]);

  // Function to handle element drops
  const handleDrop = (item) => {
    setElements((prev) => [
      ...prev,
      { type: item.type, id: Date.now(), style: {} }
    ]);
  };

  // Function to update individual element style
  const updateElementStyle = (id, newStyle) => {
    setElements((prev) =>
      prev.map((el) => (el.id === id ? { ...el, style: newStyle } : el))
    );
  };

  // Function to render the different types of elements with editable styles
  const renderElement = (element) => {
    switch (element.type) {
      case 'heading':
        return (
          <Container
            key={element.id}
            initialStyle={element.style}
            onUpdateStyle={(newStyle) => updateElementStyle(element.id, newStyle)}
          >
            <Heading text="Sample Heading" />
          </Container>
        );
      case 'paragraph':
        return (
          <Container
            key={element.id}
            initialStyle={element.style}
            onUpdateStyle={(newStyle) => updateElementStyle(element.id, newStyle)}
          >
            <Paragraph text="Sample Paragraph" />
          </Container>
        );
      case 'image':
        return (
          <Container
            key={element.id}
            initialStyle={element.style}
            onUpdateStyle={(newStyle) => updateElementStyle(element.id, newStyle)}
          >
            <Image src="https://via.placeholder.com/150" />
          </Container>
        );
      case 'container':
        return (
          <Container
            key={element.id}
            initialStyle={element.style}
            onUpdateStyle={(newStyle) => updateElementStyle(element.id, newStyle)}
          >
            Container Content
          </Container>
        );
      default:
        return null;
    }
  };

  return (
    <div style={{ display: 'flex', padding: '20px' }}>
      {/* Sidebar with Draggable Items */}
      <div style={{ width: '200px', marginRight: '20px' }}>
        <h3 className='font-semibold text-xl'>Elements</h3>
        <DragItem type="heading">
          <button>Heading</button>
        </DragItem>
        <DragItem type="paragraph">
          <button>Paragraph</button>
        </DragItem>
        <DragItem type="image">
          <button>Image</button>
        </DragItem>
        <DragItem type="container">
          <button>Container</button>
        </DragItem>
      </div>

      {/* Droppable Canvas */}
      <DropZone onDrop={handleDrop}>
        {elements.map((element) => renderElement(element))}
      </DropZone>
    </div>
  );
}
