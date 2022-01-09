import React from "react";

import "./Test1.css";

import logo from "./logo.png";

import { Avatar } from "@mui/material";
import { IconButton } from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import StorefrontIcon from "@mui/icons-material/Storefront";
import FlagIcon from "@mui/icons-material/Flag";
import AddIcon from "@mui/icons-material/Add";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function Test1() {
  return (
    <div className="test1-container">
      <div className="container-col-left">
        <img src={logo} className="logo-img" />
        <div className="search">
          <SearchIcon />
          <input type="text"></input>
        </div>
      </div>
      <div className="container-col-middle">
        <ConnectWithoutContactIcon />
        <StorefrontIcon />
        <FlagIcon />
      </div>
      <div className="container-col-right">
        <div className="profile">
          <Avatar />
          <h3>GoldGenes13</h3>
        </div>
        <IconButton>
          <AddIcon />
        </IconButton>
        <IconButton>
          <ExpandMoreIcon />
        </IconButton>
      </div>
    </div>
  );
}
