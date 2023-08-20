import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import LoginModal from "./LoginModal";
import Explore from "./Explore";
import Tooltip from "@mui/material/Tooltip";
import Sidebar from "./Sidebar";

function Header() {
  return (
    <>
      <Navbar expand="lg" style={{ backgroundColor: "#ff830e" }}>
        <Container fluid>
          <Navbar.Brand to="#" className="mx-3">
            {" "}
            <Sidebar />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link
                to="#action1"
                className="menu mx-3"
                style={{ fontSize: "20px", wordSpacing: "2px" }}
              >
                <b>EduGaon</b>
              </Nav.Link>
              <Tooltip title={<Explore />}>
                <Button
                  variant="outline-primary"
                  className="mx-3"
                  style={{ color: "white" }}
                >
                  Explore Program &#9662;
                </Button>
              </Tooltip>
              <Nav.Link to="#action2" className="menu mx-3">
                Career Support
              </Nav.Link>

              <Nav.Link to="#" className="menu mx-3">
                Success Stories
              </Nav.Link>
              <Nav.Link to="#action2" className="menu mx-3">
                Study Abroad
              </Nav.Link>
              <Nav.Link to="#action2" className="menu mx-3">
                Enterprise
              </Nav.Link>
              <Nav.Link to="#action2" className="menu mx-3">
                For Recruiters
              </Nav.Link>
            </Nav>

            <Nav.Link to="#" className="mx-auto">
              <LoginModal />
            </Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
