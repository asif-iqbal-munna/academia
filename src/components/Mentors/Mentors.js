import React from "react";
import { Col, Nav, Row, Tab } from "react-bootstrap";
import LaunchCourse from "../../LaunchCourse/LaunchCourse";
import MentorList from "../MentorList/MentorList";

const Mentors = () => {
  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row className="px-5 my-5">
        <Col sm={3}>
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="first" className="cursor-pointer">
                Mentors
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second" className="cursor-pointer">
                Launch Program
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content>
            <MentorList />
            <LaunchCourse />
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
};

export default Mentors;
