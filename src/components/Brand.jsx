import React from "react";
import "./Brand.css";

const Brand = () => {
  const items = [
    { list: "01.", title: "BRAND IDENTITY", price: "$5000" },
    { list: "02.", title: "PACKAGING", price: "$6000" },
    { list: "03.", title: "SEO & PPC", price: "$3000" },
    { list: "04.", title: "WEB DEVELOPMENT", price: "$4000" },
    { list: "05.", title: "MARKETING", price: "$2000" },
  ];

  return (
    <div className="brand-container">
      <div className="brand-section">
        <div className="brand-header">
          <p>WHAT WE OFFER</p>
          <p>2023</p>
        </div>
        {items.map((item, index) => (
          <div className="brand-item" key={index}>
            <span className="list-number">{item.list}</span>
            <h2 className="brand-title">{item.title}</h2>
            <span className="brand-price">{item.price}</span>
          </div>
        ))}
        <div className="footer-header">
          <p>OUR STATICS</p>
          <div className="footer-header2">
            <p>REVENUE</p>
            <p>AUDIANCE</p>
            <p>EXPERIENCE</p>
          </div>
        </div>
        <div className="brand-footer">
          <h2>$500M+</h2>
          <h2>5 BILLION+</h2>
          <h2>15 YEARS</h2>
        </div>
      </div>
    </div>
  );
};

export default Brand;
