import React from "react";
import "./Icons.css";

const imageData = [
  "./images/Vector1.svg",
  "./images/Vector2.svg",
  "./images/Vector3.svg",
  "./images/Vector4.svg",
  "./images/Vector5.svg",
  "./images/Vector6.svg",
  "./images/Vector7.svg",
  "./images/Vector8.svg",
  "./images/Vector9.svg",
  "./images/Vector10.svg",
  "./images/Vector11.svg",
  "./images/Vector12.svg",
  "./images/Vector13.svg",
  "./images/Vector14.svg",
  "./images/Vector15.svg",
  "./images/Vector16.svg",
];

const Trusted = () => {
  return (
    <div className="icon-container">
      <div className="icon-header">
        <p>2023 ©</p>
        <p>OUR PAST COLLABS</p>
      </div>
      <div className="icon-container2">
        <h2>Trusted By:</h2>
        <div className="icon-list">
          {imageData.map((src, index) => (
            <img key={index} src={src} alt={`Vector ${index + 1}`} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trusted;
