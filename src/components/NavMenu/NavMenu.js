import React from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

const NavMenu = ({ bgColor }) => {
  return (
    <Navbar
      collapseOnSelect
      fixed="top"
      expand="lg"
      className={
        !bgColor
          ? "position-absolute w-100"
          : "position-absolute w-100 bg-light"
      }
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
              to="/programs"
            >
              My Programs
            </Nav.Link>
            <div className="ms-md-3">
              <Link to="/register">
                <Button variant="primary" className="me-3">
                  Register
                </Button>
              </Link>
              <Link to="/mentors">
                <Button
                  variant="outline-primary"
                  className="text-dark d-block d-sm-inline-block mt-3 mt-md-0"
                >
                  Mentors
                </Button>
              </Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavMenu;
