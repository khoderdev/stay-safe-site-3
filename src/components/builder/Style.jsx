import React, { useState } from 'react';

export default function Style({ initialStyle = {}, onStyleChange }) {
  const [style, setStyle] = useState(initialStyle);

  const handleStyleChange = (property, value) => {
    const updatedStyle = { ...style, [property]: value };
    setStyle(updatedStyle);
    onStyleChange(updatedStyle);
  };

  return (
    <div style={{ padding: "10px", border: "1px solid #ddd", borderRadius: "4px", background: "#f9f9f9" }}>
      <h4>Style Settings</h4>

      {/* Padding */}
      <label>
        Padding:
        <input
          type="number"
          value={parseInt(style.padding) || 0}
          onChange={(e) => handleStyleChange("padding", `${e.target.value}px`)}
        />
      </label>

      {/* Margin */}
      <label>
        Margin:
        <input
          type="number"
          value={parseInt(style.margin) || 0}
          onChange={(e) => handleStyleChange("margin", `${e.target.value}px`)}
        />
      </label>

      {/* Width */}
      <label>
        Width:
        <input
          type="number"
          value={parseInt(style.width) || 100}
          onChange={(e) => handleStyleChange("width", `${e.target.value}px`)}
        />
      </label>

      {/* Height */}
      <label>
        Height:
        <input
          type="number"
          value={parseInt(style.height) || 100}
          onChange={(e) => handleStyleChange("height", `${e.target.value}px`)}
        />
      </label>

      {/* Background Color */}
      <label>
        Background Color:
        <input
          type="color"
          value={style.backgroundColor || "#ffffff"}
          onChange={(e) => handleStyleChange("backgroundColor", e.target.value)}
        />
      </label>

      {/* Border */}
      <label>
        Border Color:
        <input
          type="color"
          value={style.borderColor || "#dddddd"}
          onChange={(e) => handleStyleChange("borderColor", e.target.value)}
        />
      </label>
      <label>
        Border Width:
        <input
          type="number"
          value={parseInt(style.borderWidth) || 1}
          onChange={(e) => handleStyleChange("borderWidth", `${e.target.value}px`)}
        />
      </label>
      <label>
        Border Style:
        <select
          value={style.borderStyle || "solid"}
          onChange={(e) => handleStyleChange("borderStyle", e.target.value)}
        >
          <option value="solid">Solid</option>
          <option value="dashed">Dashed</option>
          <option value="dotted">Dotted</option>
          <option value="double">Double</option>
          <option value="none">None</option>
        </select>
      </label>

      {/* Text Alignment */}
      <label>
        Text Align:
        <select
          value={style.textAlign || "left"}
          onChange={(e) => handleStyleChange("textAlign", e.target.value)}
        >
          <option value="left">Left</option>
          <option value="center">Center</option>
          <option value="right">Right</option>
          <option value="justify">Justify</option>
        </select>
      </label>

      {/* Flex Alignment */}
      <label>
        Align Items (Flex):
        <select
          value={style.alignItems || "stretch"}
          onChange={(e) => handleStyleChange("alignItems", e.target.value)}
        >
          <option value="flex-start">Start</option>
          <option value="center">Center</option>
          <option value="flex-end">End</option>
          <option value="stretch">Stretch</option>
        </select>
      </label>

      <label>
        Justify Content (Flex):
        <select
          value={style.justifyContent || "flex-start"}
          onChange={(e) => handleStyleChange("justifyContent", e.target.value)}
        >
          <option value="flex-start">Start</option>
          <option value="center">Center</option>
          <option value="flex-end">End</option>
          <option value="space-between">Space Between</option>
          <option value="space-around">Space Around</option>
        </select>
      </label>
    </div>
  );
}
