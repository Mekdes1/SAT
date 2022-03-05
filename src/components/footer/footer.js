import React, {useState, useRef} from 'react';
import {Container, Col, Row} from 'react-bootstrap';
import {FaInstagramSquare} from 'react-icons/fa';
import {FaTelegram} from 'react-icons/fa';
import {FaTiktok} from 'react-icons/fa';
import {FaFacebookSquare} from 'react-icons/fa';
import './footer.css';
import ContactForm from '../contactForm/contactForm';
import Overlay from 'react-bootstrap/Overlay';

import Popover from 'react-bootstrap/Popover';
export default function Footer () {
  const [show, setShow] = useState (false);
  const [target, setTarget] = useState (null);
  const ref = useRef (null);

  const handleClick = event => {
    setShow (!show);
    setTarget (event.target);
  };
  return (
    <Container className="fixed-bottom  footer-container" fluid>
      <Row>

        <Col>

          <a href={'https://t.me/ethioeLearning'}>
            {' '}<FaTelegram size={20} className="footer-icons" />
          </a>

          <a href={'https://www.facebook.com/ethioelearning'}>
            {' '}<FaFacebookSquare size={20} className="footer-icons" />
          </a>
          <a
            href={
              'https://www.pluralsight.com/guides/how-to-render-%22a%22-with-optional-href-in-react'
            }
          >
            {' '}<FaInstagramSquare size={20} className="footer-icons" />
          </a>
          <a
            href={
              'https://www.pluralsight.com/guides/how-to-render-%22a%22-with-optional-href-in-react'
            }
          >
            {' '}<FaTiktok size={20} className="footer-icons" />
          </a>
        </Col>
        <Col>
          <p className="footer-text">© 2021  Ethio-E-Learning </p>

        </Col>
        <Col ref={ref} className="contactus-text">
          <p onClick={handleClick} className="contactus-text"> Contact us </p>
          <Overlay
            show={show}
            target={target}
            placement="top"
            container={ref}
            containerPadding={20}
          >
            <Popover id="popover-contained">
              <Popover.Header as="h3">Send us a message</Popover.Header>
              <Popover.Body>
                <ContactForm />
              </Popover.Body>

            </Popover>
          </Overlay>

        </Col>
      </Row>

    </Container>
  );
}
