import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Footer() {
  return (
    <>
      <Container fluid className="py-4 footers">
        <Row>
          <h5 className="py-4">
            © Edugaon Education and Innovation Labs Private Limited
          </h5>
          <Container className="Fdetail">
            <Row>
              <Col>
                <h3 className="py-2">Edugaon Technology Pvt Ltd.</h3>
                <a href="https://www.agbinc.in/" target="blank">
                  <img src="http://edugaon.com/images/logo/logo-agbinc.png" width="150px" alt="dummy"/>
                </a>
                <a style={{marginLeft:'30px'}} href="http://metzee.com/" target="blank">
                  <img src="http://edugaon.com/images/logo/metzee-logo.jpeg" width="150px" />
                </a>
              </Col>
            </Row>
          </Container>
        </Row>
      </Container>
    </>
  );
}
