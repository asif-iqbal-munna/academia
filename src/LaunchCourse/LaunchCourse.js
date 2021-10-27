import axios from "axios";
import React from "react";
import { Col, FloatingLabel, Form, Row, Tab, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";

const LaunchCourse = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    axios.post("http://localhost:8080/programs", data).then((res) => {
      if (res.data.insertedId) {
        alert("Your Program Is Added Successfully");
        reset();
      }
    });
    // console.log(data);
  };
  return (
    <Tab.Pane eventKey="second">
      <h2 className="text-center fw-bold">Launch A Program</h2>
      <div className="p-4 bg-light rounded-3">
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridPassword">
              <FloatingLabel
                controlId="floatingTextarea"
                label="Title"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  placeholder="Title"
                  {...register("title", {
                    required: true,
                  })}
                />
              </FloatingLabel>
            </Form.Group>
            <Form.Group as={Col} className="mb-3" controlId="formGridAddress2">
              <FloatingLabel
                controlId="floatingTextarea"
                label="Course Duration"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  placeholder="Course Duration"
                  {...register("duration", {
                    required: true,
                  })}
                />
              </FloatingLabel>
            </Form.Group>
          </Row>
          <Row>
            <Form.Group as={Col} controlId="formGridPassword">
              <FloatingLabel
                controlId="floatingTextarea"
                label="Phone Number"
                className="mb-3"
              >
                <Form.Control
                  type="number"
                  placeholder="Phone Number"
                  {...register("number", {
                    required: true,
                  })}
                />
              </FloatingLabel>
            </Form.Group>
            <Form.Group as={Col} controlId="formGridPassword">
              <FloatingLabel
                controlId="floatingTextarea"
                label="Banner"
                className="mb-3"
              >
                <Form.Control
                  type="url"
                  placeholder="banner"
                  {...register("banner", {
                    required: true,
                  })}
                />
              </FloatingLabel>
            </Form.Group>
          </Row>

          <Form.Group controlId="formGridPassword">
            <FloatingLabel
              controlId="floatingTextarea"
              label="Email Address"
              className="mb-3"
            >
              <Form.Control
                type="email"
                placeholder="Email Address"
                {...register("email", {
                  required: true,
                })}
              />
            </FloatingLabel>
          </Form.Group>
          <FloatingLabel
            controlId="floatingTextarea"
            label="Description"
            className="mb-3"
          >
            <Form.Control
              as="textarea"
              placeholder="Description"
              {...register("description", {
                required: true,
              })}
            />
          </FloatingLabel>
          <Button variant="primary" type="submit" className="ms-auto d-block">
            Submit
          </Button>
        </Form>
      </div>
    </Tab.Pane>
  );
};

export default LaunchCourse;
