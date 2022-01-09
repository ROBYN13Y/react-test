import React from "react";

import "./Test1.css";

import { Container, Row, Col } from "react-bootstrap";

import { Avatar, IconButton } from "@mui/material";

//ICONS MATERIAL UI
//DOCS https://mui.com/components/icons/#main-content
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import ForumIcon from "@mui/icons-material/Forum";

export default function Test1() {
  return (
    <Container className="test1-container">
      <Row>
        <Col className="col-left">
          <SearchIcon />
          <input type="text" />
          <div className="left-text"></div>
        </Col>
        <Col className="col-middle">
          <Avatar />
        </Col>
        <Col className="col-right">
          <IconButton>
            <AddIcon />
          </IconButton>
          <IconButton>
            <ForumIcon />
          </IconButton>
        </Col>
      </Row>
    </Container>
  );
}
