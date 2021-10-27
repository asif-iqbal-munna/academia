import React from "react";
import { FloatingLabel, Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";

const Register = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="my-5">
      <h2 className="text-center fw-bold">Register For The Program</h2>
      <div className="w-50 p-5 rounded-3 mx-auto bg-light">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* <input {...register("firstName", { required: true, maxLength: 20 })} />
      <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
      <input type="number" {...register("age", { min: 18, max: 99 })} /> */}
          <FloatingLabel controlId="floatingInputGrid" label="Full Name">
            <Form.Control
              className="mb-3"
              type="text"
              placeholder="Name"
              {...register("Name", { required: true })}
            />
          </FloatingLabel>
          <FloatingLabel controlId="floatingInputGrid" label="Email address">
            <Form.Control
              className="mb-3"
              type="email"
              placeholder="name@example.com"
              {...register("Email", { required: true })}
            />
          </FloatingLabel>
          <FloatingLabel controlId="floatingInputGrid" label="Phone Number">
            <Form.Control
              className="mb-3"
              placeholder="price"
              type="number"
              {...register("age", { required: true })}
            />
          </FloatingLabel>
          <FloatingLabel controlId="floatingInputGrid" label="Phone Number">
            <Form.Control
              className="mb-3"
              placeholder="price"
              type="date"
              {...register("date", { required: true })}
            />
          </FloatingLabel>
          <FloatingLabel controlId="floatingInputGrid" label="Program Name">
            <Form.Control
              className="mb-3"
              type="text"
              placeholder="Course Name"
              {...register("Name", { required: true })}
            />
          </FloatingLabel>
          <Button variant="primary" type="submit" className="ms-auto d-block">
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Register;
