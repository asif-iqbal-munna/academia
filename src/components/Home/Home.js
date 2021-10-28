import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Header from "../Header/Header";
import "./Home.css";

const Home = () => {
  const [programs, setPrograms] = useState([]);
  const history = useHistory();
  useEffect(() => {
    axios
      .get("http://localhost:8080/programs")
      .then((res) => setPrograms(res.data))
      .catch((err) => {
        // handle error
        console.log(err);
      });
  }, []);

  const hanldeProgram = (id) => {
    history.push(`/register`);
    const URI = `http://localhost:8080/programs/${id}`;
    axios
      .get(URI)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  console.log(programs);
  return (
    <div>
      <Header />
      <Container>
        <Row xs={1} md={2} lg={3} className="g-4 my-5">
          {programs.map((program) => (
            <Col key={program?._id}>
              <Card
                onClick={() => hanldeProgram(program?._id)}
                className="cursor-pointer"
              >
                <Card.Img variant="top" src={program?.banner} />
                <Card.Body>
                  <Card.Title className="text-decoration text-decoration-none">
                    {program?.title}
                  </Card.Title>
                  <Card.Text className="text-decoration">
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Home;
