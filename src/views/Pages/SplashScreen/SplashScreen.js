import React from "react";
import MDSpinner from "react-md-spinner";
import {
  Col,
  Container,
  Row
} from "reactstrap";

const SplashScreen = () => {
  return (
    <div className="app flex-row align-items-center">
      <Container>
        <Row className="justify-content-center">
          <Col md="6">
            <div className="loading-screen">
              <MDSpinner size={100} />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SplashScreen;
