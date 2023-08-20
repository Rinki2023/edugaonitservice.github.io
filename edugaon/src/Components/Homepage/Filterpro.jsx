import React from 'react';
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { Badge } from "react-bootstrap";

function Filterpro() {
  //const [validated, setValidated] = useState(false);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <h4  className="py-4">
        <Badge  className="py-3"
          bg="warning"
          variant="outline-primary"
          style={{ color: "white" }}
          onClick={handleShow}
        >
          Filter Programs
        </Badge>
      </h4>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login here...</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label aria-required>Email address</Form.Label>
              <Form.Control
                required
                type="email"
                placeholder="Enter Your Email address"
              />
              <br />
              <Form.Label aria-readonly>Password</Form.Label>
              <Form.Control
                required
                type="Password"
                placeholder="Enter Password"
              />
              <br />
              <Form.Label style={{ color: "blue" }}>Forgot Password</Form.Label>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-primary" onClick={handleClose} size="lg">
            Login
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Filterpro;
