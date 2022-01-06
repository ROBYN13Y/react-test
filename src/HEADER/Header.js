import React from "react";

import "./Header.css";

import logo from "./mouse.png";

export default function Header() {
  return (
    <div className="app-header">
      <img src={logo} className="mouse-icon" alt="mouse icon" />
      <p className="header-text">React Testing</p>
    </div>
  );
}
