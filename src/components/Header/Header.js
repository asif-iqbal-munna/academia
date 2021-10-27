import React from "react";
import {
  Container,
  FormControl,
  InputGroup,
  Nav,
  Navbar,
} from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="banner text-white position-relative">
      <Navbar
        collapseOnSelect
        fixed="top"
        expand="lg"
        className="position-absolute w-100"
      >
        <Container>
          <Navbar.Brand
            as={Link}
            to="/"
            className="text-dark fs-2 fw-bold fst-italic"
          >
            academia
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto text-dark small-bg-color fs-5 fw-bolder">
              <Nav.Link
                className="menu-link"
                as={NavLink}
                activeStyle={{
                  fontWeight: "bold",
                  color: "#110df0",
                }}
                to="/"
              >
                Home
              </Nav.Link>
              <Nav.Link
                className="menu-link"
                as={NavLink}
                activeStyle={{
                  fontWeight: "bold",
                  color: "#110df0",
                }}
                to="/courses"
              >
                Courses
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="position-absolute top-50 start-50 translate-middle w-75">
        <h2 className="text-dark fs-2 fw-bolder heading-small d-flex justify-content-center">
          Expand your career opportunities with Us
        </h2>
        <InputGroup className="my-3 w-50 width-all mx-auto">
          <FormControl
            placeholder="Search"
            aria-label="Search"
            aria-describedby="basic-addon2"
          />
          <InputGroup.Text id="basic-addon2" className="btn-info text-white">
            Search
          </InputGroup.Text>
        </InputGroup>
      </div>
    </header>
  );
};

export default Header;
