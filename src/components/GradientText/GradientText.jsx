/* eslint-disable react/prop-types */
import './GradientText.css';

export default function GradientText({ text, fontSize }) {
  return (
    <h1 className="gradient-text" style={{ fontSize: fontSize }}>
      {text}
    </h1>
  );
}
