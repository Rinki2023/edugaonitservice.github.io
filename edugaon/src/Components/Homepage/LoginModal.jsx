import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { FaFacebook, FaGoogle} from "react-icons/fa";
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from "axios";

function LoginModal() {
  const [validated, setValidated] = useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //for Login and save data 
  const [email,setEmail] = useState(" ");
  const [password, setPassword] = useState(" ");

  function handleSubmit (event) {
    event.preventDefault();
    axios.post('http://localhost:3000/login', {email, password})
    .then(res => console.log(res))
    .catch(err => console.log(err));
  }

  return (
    <>
      <Button
        variant="outline-primary"
        style={{ color: "white" }}
        onClick={handleShow}
      >
        Login
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login here...</Modal.Title>
        </Modal.Header>
        <div className="d-grid gap-4 mx-5">
          <Button type="submit" variant="outline-primary" size="lg">
            <FaGoogle color="red" size={18} /> 
            Login with google
          </Button>
          <Button variant="outline-secondary" size="lg">
            <FaFacebook color="blue" size={18} /> 
            Login with Facebook
          </Button>
        </div>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label aria-required htmlor="email">
                Email address
              </Form.Label>
              <Form.Control
                name="email"
                id="email"
                required
                type="email"
                placeholder="Enter Your Email address"
                onChange={e => setEmail(e.target.value)}
              />
              <br />

              <Form.Label aria-readonly htmlFor="password">
                Password
              </Form.Label>
              <Form.Control
                required
                id="password"
                name="password"
                type="password"
                placeholder="Enter Password"
                onChange={e => setPassword(e.target.value)}
              />
              <br />
              <Form.Label style={{ color: "blue" }}>Forgot Password</Form.Label>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
        <Button variant="outline-primary" onClick={handleSubmit} size="lg">
            Login
          </Button>
          <Button variant="outline-primary" onClick={handleClose} size="lg">
            Cencil
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default LoginModal;
