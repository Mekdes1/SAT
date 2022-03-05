import React, { useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import emailjs from "emailjs-com";

import "./contactForm.css";

export default function ContactForm() {
  const [message, setMessage] = useState("");
  const sendEmail = (e) => {
    e.preventDefault();

    var templateParams = {
      message: message,
    };

    if (e.target.value !== "") {
      emailjs
        .send(
          "service_xjalqsz",
          "template_1y0vb9u",
          templateParams,
          "user_ATVR62xAWXfgzOfPhDScl"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };
  return (
    <Form onSubmit={sendEmail}>
      <Form.Group
        as={Row}
        className="mb-3"
        controlId="exampleForm.ControlTextarea1"
      >
        <Form.Label column sm={2}>
          Message
        </Form.Label>
        <Col sm={10}>
          <Form.Control
            as="textarea"
            rows={6}
            onChange={(e) => setMessage(e.target.value)}
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row}>
        <Col md={{ span: 3, offset: 10 }}>
          {" "}
          <Button id="submit-btn" type="submit">
            Send
          </Button>
        </Col>
      </Form.Group>
    </Form>
  );
}
