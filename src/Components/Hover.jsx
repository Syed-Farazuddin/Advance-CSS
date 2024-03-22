import React from "react";
import "./hover.css";
function Hover() {
  return (
    <div className="navContainer">
      <nav>
        <div className="navbar">
          <p className="navItems">Home</p>
          <p className="navItems">About</p>
          <p className="navItems">Services</p>
          <p className="navItems">Contact</p>
          <button className="buttonStyling">Register</button>
        </div>
      </nav>
    </div>
  );
}

export default Hover;
