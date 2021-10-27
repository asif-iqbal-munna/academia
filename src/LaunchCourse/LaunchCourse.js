import React from "react";
import { Col, FloatingLabel, Form, Row, Tab, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";

const LaunchCourse = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <Tab.Pane eventKey="second">
      <h2 className="">Second another thing</h2>
      <div className="p-4 bg-light rounded-3">
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridPassword">
              <FloatingLabel
                controlId="floatingTextarea"
                label="Full Name"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  placeholder="Full Name"
                  {...register("name", {
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
                  type="number"
                  placeholder="Course Duration"
                  {...register("duration", {
                    required: true,
                  })}
                />
              </FloatingLabel>
            </Form.Group>
          </Row>

          <Form.Group controlId="formGridPassword">
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
