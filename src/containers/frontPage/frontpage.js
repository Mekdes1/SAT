import React, {useState} from 'react';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import SideText from '../../components/sideText/sideText';
import ImageScroll from '../../components/imgScroll/imgScroll';
import {Container, Row, Col} from 'react-bootstrap';
import Questions from '../../components/questions/questions';
export default function FrontPage () {
  const [question, setQuestion] = useState (false);
  const handelYearSelect = () => {
    setQuestion (!question);
    console.log ('year has been selected');
  };

  return (
    <Container fluid style={{padding: 0, margin: 0}}>
      <Header handelYearSelect={handelYearSelect} />
      <Container>
        {question
          ? <Row>
              {' '}
              <Col  className="d-flex align-items-center justify-content-center">
                <Questions />{' '}
              </Col>
            </Row>
          : <Row>
              <Col style={{padding: '10px'}} lg={6} sm={12}>
                <ImageScroll />
              </Col>
              <Col lg={6} sm={12}>
                <SideText />
              </Col>
            </Row>}

        

      </Container>

      <Footer />
    </Container>
  );
}
