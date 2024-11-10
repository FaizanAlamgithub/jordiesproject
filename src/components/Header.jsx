import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <>
      <div className="navbar">
        <ul className="header">
          <li>HOME</li>
          <li>WORKS</li>
          <li className="contact">
            CONTACT<i class="fa-solid fa-arrow-up"></i>
          </li>
          <li>ABOUT US</li>
        </ul>
        <div>
          <h1 className="text1">Inovate</h1>
          <div className="text2-group">
            <h1 className="text2">Now</h1>
            <div>
              <p>ARY.AGENCY</p>
              <p>EST.23</p>
            </div>
          </div>
        </div>
      </div>
      <p className="works">WORKS</p>
    </>
  );
};

export default Header;
