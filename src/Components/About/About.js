import React from 'react';
import img from './myself.png';
import floorPlan1 from './floorPlan1.jpg';
import floorPlan2 from './floorPlan2.jpg';
import floorPlan3 from './floorPlan3.jpg';
import floorPlan4 from './floorPlan4.jpg';
import floorPlan5 from './floorPlan5.jpg';
import floorPlan6 from './floorPlan6.jpg';
import './About.css';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import ImageSlider from '../Slider/ImageSlider';
import { SliderData } from '../Slider/SliderData';
import { Fade, Flip, Slide } from 'react-reveal';

export default function About() {
  return (
    <Container>
      <Row className='about'>
        <Col className='title col-8'>
          <Fade left>
            <h1>GABRIEL CHOW</h1>
            <p> I joined an intensive Front-end Web developer course at Generation Hong Kong and it equipped me with the skills of HTML, CSS, JavaScript, React.</p>
            <Link className="btn" to="/projectPage"> Click my project </Link>
          </Fade>
        </Col>
        <Col className='photo photoColor col-4 d-flex justify-content-center'>
          <Fade right>
            <img src={img} />
          </Fade>
        </Col>
      </Row>
          <hr className='bar'></hr>
      <Row className='slider'>
        <Flip top>
          <h1 className='d-flex justify-content-center' >Travel Photos</h1>
          <p> I like to traval, when I saw the nice view, I will use mobile to take pictures. There are my pictures I was took. It is from Hong Kong, Japan and Taiwan.</p>
        </Flip>
        <Fade top>
          <ImageSlider slides={SliderData}  />
        </Fade>
      </Row> 

          <hr className='bar'></hr>

        <Row className='aboutMe d-flex align-items-center' >
          <Col className='col-5 aboutColor '>
            <div className='aboutText'>
              <Flip top>
                <h1>About Me</h1>
                <p>Before I leaning "Front-End", I was working in inteior design, this is my drawing of my job.</p>
              </Flip>
            </div>
          </Col>
          <Col className='plan col-9 d-flex justify-content-end'>
            <Slide right>
              <img src={floorPlan1} />
              <img src={floorPlan2} />
              <img src={floorPlan3} />
            </Slide>
          </Col>
        </Row> 

        <Row className=' moblie'>
        <Row className=' aboutColor moblie'>
            <div className='aboutText'>
              <Slide left>
                <h1>About Me</h1>
                <p>Before I leaning "Front-End", I was working in inteior design, this is my drawing of my job.</p>
              </Slide>
            </div>
          </Row>
          <Row className='img'>
            <Slide bottom>
              <img src={floorPlan4} />
              <img src={floorPlan5} />
              <img src={floorPlan6} />
            </Slide>
          </Row>
        </Row>
    </Container>
  )
}


