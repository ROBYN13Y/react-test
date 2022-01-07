import React from "react";

import "./Test1.css";

//ICONS MATERIAL UI
//DOCS https://mui.com/components/icons/#main-content
import SearchIcon from "@mui/icons-material/Search";

import logo from "./g2.png";

export default function Test1() {
  return (
    <div className="test1-container">
      <div className="container-left">
        <img src={logo} alt="logo icon" className="logo-icon" />
        <div className="left-text">
          <SearchIcon />
        </div>
      </div>
      <div className="container-middle"></div>
      <div className="container-right">
        <input type="button" value="BUTTON" />
        <input type="button" value="BUTTON" />
      </div>
    </div>
  );
}
