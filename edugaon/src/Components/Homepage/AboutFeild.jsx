import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import { Tab } from "react-bootstrap";
import UnivercityList from "./UnivercityList";
import AppDevelopment from "./AppDevelopment";
import WebDevelopment from "./WebDevelopment";
import Frontend from "./Frontend";
import Android from "./Android";
import Uiux from "./Uiux";
import EngComm from "./EngComm";
import LearnApply from "./LearnApply";
import Filterpro from "./Filterpro";

export default function AboutFeild() {
  return (
    <>
      <Container className="py-4">
        <Row>
          <Col sm={8}>
            <h1 className="py-4">Programs in partnership with world’s top universities</h1>
          </Col>
          <Col sm={4}><Filterpro/></Col>
        </Row>
        <Row>
          <Col sm>
            {" "}
            <Tab.Container
              id="list-group-tabs-example"
              defaultActiveKey="#link1"
            >
              <Row>
                <Col sm={3}>
                  <ListGroup>
                    <ListGroup.Item
                      action
                      href="#link1"
                      className="d-flex justify-content-between align-items-start"
                    >
                      Software Development
                      <span>&#62;</span>
                    </ListGroup.Item>
                    <ListGroup.Item
                      action
                      href="#link2"
                      className="d-flex justify-content-between align-items-start"
                    >
                      Web Development
                      <span>&#62;</span>
                    </ListGroup.Item>
                    <ListGroup.Item
                      action
                      href="#link3"
                      className="d-flex justify-content-between align-items-start"
                    >
                      App Development
                      <span>&#62;</span>
                    </ListGroup.Item>
                    <ListGroup.Item
                      action
                      href="#link4"
                      className="d-flex justify-content-between align-items-start"
                    >
                      Backend/ Frontend/ MERN/ PhP
                      <span>&#62;</span>
                    </ListGroup.Item>
                    <ListGroup.Item
                      action
                      href="#link5"
                      className="d-flex justify-content-between align-items-start"
                    >
                      Android/ Flutter/ Dart App Development
                      <span>&#62;</span>
                    </ListGroup.Item>
                    <ListGroup.Item
                      action
                      href="#link6"
                      className="d-flex justify-content-between align-items-start"
                    >
                      UI/ Ux Development
                      <span>&#62;</span>
                    </ListGroup.Item>
                    <ListGroup.Item
                      action
                      href="#link7"
                      className="d-flex justify-content-between align-items-start"
                    >
                      English Communication Skill Development
                      <span>&#62;</span>
                    </ListGroup.Item>
                    <ListGroup.Item
                      action
                      href="#link8"
                      className="d-flex justify-content-between align-items-start"
                    >
                      Learn, Apply and Work <span>&#62;</span>
                    </ListGroup.Item>
                  </ListGroup>
                </Col>
                <Col sm={9}>
                  <Tab.Content>
                    <Tab.Pane eventKey="#link1">
                      <UnivercityList />
                    </Tab.Pane>
                    <Tab.Pane eventKey="#link2">
                      <WebDevelopment />
                    </Tab.Pane>
                    <Tab.Pane eventKey="#link3">
                      <AppDevelopment />
                    </Tab.Pane>
                    <Tab.Pane eventKey="#link4">
                      <Frontend />
                    </Tab.Pane>
                    <Tab.Pane eventKey="#link5">
                      <Android />
                    </Tab.Pane>
                    <Tab.Pane eventKey="#link6">
                      <Uiux/>
                    </Tab.Pane>
                    <Tab.Pane eventKey="#link7">
                      <EngComm/>
                    </Tab.Pane>
                    <Tab.Pane eventKey="#link8">
                      <LearnApply/>
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
          </Col>
          {/* <Col sm>sm=true</Col>
          <Col sm>sm=true</Col> */}
        </Row>
      </Container>
    </>
  );
}
