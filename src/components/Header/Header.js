import React from "react";
import { FormControl, InputGroup } from "react-bootstrap";
import NavMenu from "../NavMenu/NavMenu";
import "./Header.css";

const Header = () => {
  return (
    <header className="banner text-white position-relative">
      <NavMenu />
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
