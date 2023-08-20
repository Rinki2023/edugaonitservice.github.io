import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function Registration() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //form
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [number, setNumber] = useState("");
  const [address, setAddress] = useState("");


  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Sign Up
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton style={{width:'700px',backgroundColor:'white'}}>
          <Modal.Title style={{textAlign:'center', color:'blue'}}>Register Here...</Modal.Title>
        </Modal.Header>
          {" "}
          <form onSubmit={handleSubmit} style={{width:'700px',backgroundColor:'white'}}>
            <label>
              Enter your name:<br/>
              <input
                type="text"
                value={name}
                placeholder="Enter your name"
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            <label>
              Enter your Email:<br/>
              <input
                type="email"
                value={email}
                placeholder="Enter your Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <label>
              Enter your Password:<br/>
              <input
                type="password"
                placeholder="Enter your Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <label>
              Enter your Gender:<br/>
              <input
                type="gender"
                value={gender}
                placeholder="Enter your Gender"
                onChange={(e) => setGender(e.target.value)}
              />
            </label>
            <label>
              Enter your Mobile Number:<br/>
              <input
                type="number"
                placeholder="Enter your Mobile Number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
            </label>
            <label>
              Enter your Addres:<br/>
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </label><br/><br/><br/>
            <Button variant="secondary" onClick={handleClose}>
            submit
          </Button> <br/><br/>
          </form>
         
      </Modal>
    </>
  );
}

export default Registration;
