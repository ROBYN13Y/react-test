import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

import "./Footer.css";

export default function Footer() {
  return (
    <div className="app-footer">
      <p className="ig-icon">
        <FontAwesomeIcon icon={faInstagram} />
      </p>
      <p className="footer-text">Coded by Robyn Young</p>
    </div>
  );
}
