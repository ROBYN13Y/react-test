import Header from "./HEADER/Header";
import Footer from "./FOOTER/Footer";

//MAIN SECTION
import Test1 from "./MAIN/TEST1/Test1";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./App.css";

function App() {
  return (
    <Container>
      <Row>
        <Header />
      </Row>
      <Row>
        <Footer />
      </Row>
    </Container>
  );
}

export default App;
