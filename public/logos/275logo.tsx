import React, { CSSProperties } from "react";

export const Logo275 = ({ color }: { color: string }) => {

  const pathStyle: CSSProperties = {
    paintOrder: "fill",
    strokeWidth: "17.7245px",
    stroke: color,
    strokeLinecap: "square"
  };

  return (
    <svg viewBox="0 0 330 280" width="330" height="280" xmlns="http://www.w3.org/2000/svg" fill="none" className="w-full h-auto">
      <title>275</title>
      <path id="path-6" className="s0" d="M 37.192 126.722 L 215.333 126.399 L 215.194 162.525 L 37.192 162.441 L 37.192 198.976 L 214.971 198.764" style={pathStyle}>
        <title>2</title>
      </path>
      <path id="path-5" className="s0" d="M 37.192 90.617 L 250.631 90.617 L 250.606 198.976" style={pathStyle}>
        <title>7</title>
      </path>
      <path id="path-4" className="s0" d="M 286.696 18.929 L 37.215 18.929 L 37.215 54.841 L 286.696 54.841 L 286.696 234.724 L 37.192 233.682" style={pathStyle}>
        <title>5</title>
      </path>
    </svg>
  );
};
