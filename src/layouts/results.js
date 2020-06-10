import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';

import { fadeIn } from 'react-animations';
import { fadeInDown } from 'react-animations';

import Radium, { StyleRoot } from 'radium';

// ===========
import './infographic-figure.css';
import './scales.css';

import FootGrey from '../assets/foot-grey.png';
import FootOrange from '../assets/foot-orange.png';
import FootYellow from '../assets/foot-yellow.png';

export default function ResultsPage() {
  return (
    <StyleRoot>
      <Container fluid className='fw-container'>
        <Row className='vh-100 overflow-auto'>
          <div className='col bg-black-1 py-4 py-xl-2 px-0'>
            <Navbar className='justify-content-between mb-5 pb-3 pb-xl-5'>
              <Navbar.Brand className='mr-0' href='/'>
                <img
                  src='https://footprint.wwf.org.uk/images/new/wwf-logo3.jpg'
                  width='200px'
                  height='100px'
                  className='d-inline-block align-top'
                  alt='React Bootstrap logo'
                />
              </Navbar.Brand>
            </Navbar>

            <StyleRoot>
              <Col lg={10} className='mx-auto mb-5 pb-5'>
                <Row>
                  {/* Section-1 */}
                  <div
                    className='col-xl-3 text-white text-center text-xl-left'
                    style={styles.fadeIn}
                  >
                    <ResultsRow1
                      iconClass='icon icon-group mx-auto mx-xl-0 mb-4'
                      title='Join 100,000 Others'
                      text="to keep up-to-date with WWF's carbon progress updates."
                      btntext1='Sign up'
                      btntext2='for updates'
                      to='/'
                    />
                    <ResultsRow2
                      iconClass='icon icon-share mx-auto mx-xl-0 mb-4'
                      title='HELP US SPREAD THE WORD'
                      text='Share your results and help us make the UK more aware of their impact, and what they can do about it.'
                      btntext1='facebook'
                      btntext2='twitter'
                      // Links
                      facebook='/'
                      twitter='/'
                      // #Links
                    />
                  </div>
                  {/*  #Section-1 */}
                  {/*  Section-2 */}
                  <div
                    style={styles.fadeInDown}
                    className='col d-flex align-items-center justify-content-center'
                  >
                    <ResultSection2 />
                  </div>
                  {/*  #Section-2 */}
                  {/*  Section-3 */}
                  <div
                    className='col-xl-3 text-white mt-5 mt-sm-0 text-center text-xl-left'
                    style={styles.fadeIn2}
                  >
                    <ResultSection3 />
                  </div>
                  {/*  #Section-3 */}
                </Row>
              </Col>
            </StyleRoot>
          </div>
        </Row>
      </Container>
    </StyleRoot>
  );
}

// Section-1

const ResultsRow1 = ({ iconClass, title, text, btntext1, btntext2, to }) => {
  return (
    <div className='mb-5'>
      <i className={iconClass}></i>
      <h4>{title}</h4>
      <p>{text}</p>
      <Button
        as={Link}
        to={to}
        variant='light'
        size='lg'
        className='font-italic text-uppercase py-lg-3'
      >
        <span className='mr-2'>{btntext1}</span>
        <span className='d-none d-md-inline-block'>{btntext2}</span>
      </Button>
    </div>
  );
};

const ResultsRow2 = ({
  iconClass,
  title,
  text,
  btntext1,
  btntext2,
  facebook,
  twitter,
}) => {
  return (
    <div className='mb-5'>
      <i className={iconClass}></i>
      <h4>{title}</h4>
      <p>{text}</p>
      <div>
        <Button
          as={Link}
          to={facebook}
          size='lg'
          className='font-italic text-uppercase mr-3 mr-sm-4 py-lg-3 fa fa-facebook'
        >
          <span>{btntext1}</span>
        </Button>
        <Button
          as={Link}
          to={twitter}
          size='lg'
          className='font-italic text-uppercase py-lg-3 fa fa-twitter'
        >
          <span>{btntext2}</span>
        </Button>
      </div>
    </div>
  );
};

// Section-2

const ResultSection2 = () => {
  return (
    <div class='scales'>
      <div class='scales-base'></div>
      <div class='scales-stem'></div>
      <div class='scale-container'>
        <div class='scales-top'></div>
        <div class='scales-arm text-white'>
          <div class='basket-container left'>
            <div class='scales-basket left'>
              <div class='basket-weight'>
                <div class='basket-weight-notch'></div>
                <h5 className='mb-0 mt-1'>11.8</h5>
                <h6>Tonnes</h6>
              </div>
              <h5 class='basket-title'>You</h5>
            </div>
          </div>
          <div class='basket-container right'>
            <div class='scales-basket right'>
              <div class='basket-weight'>
                <div class='basket-weight-notch'></div>
                <h5 className='mb-0 mt-1'>10.5</h5>
                <h6>Tonnes</h6>
              </div>
              <h5 class='basket-title'>2020 Target</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Section-2

const ResultSection3 = () => {
  return (
    <div>
      <h4>
        YOUR CARBON <br /> FOOTPRINT IS
      </h4>
      <h1 className='text-danger'>
        <span>173%</span>
      </h1>
      <p className='text-justify'>
        of your target impact on the world, when your footprint is compared to a
        linear reduction of the UK average to zero between 2016 and 2045.
      </p>
      <div className='infographic-figure'>
        <ul className='graph'>
          <li>
            <img className='small-img' src={FootGrey} alt='Foot' />
            <h6>World Average</h6>
          </li>
          <li>
            <img className='mid-img' src={FootYellow} alt='Foot' />
            <h6>UK Average</h6>
          </li>
          <li>
            <img className='big-img' src={FootOrange} alt='Foot' />
            <h6>You</h6>
          </li>
        </ul>
        <ul className='legend'>
          <li className='zero'>
            <h6>0</h6>
          </li>
          <li className='five'>
            <h6>10</h6>
          </li>
          <li className='ten'>
            <h6>20 + Tonnes</h6>
          </li>
        </ul>
      </div>
      <div className='text-center text-xl-left'>
        <Button
          as={Link}
          to='/'
          variant='orange'
          size='lg'
          className='btn-with-arrow text-uppercase py-3 px-4'
        >
          <span className='mr-1'>View</span>
          <span className='d-none d-lg-inline mr-1'>full</span>
          <span className='mr-1'>results</span>
        </Button>
      </div>
    </div>
  );
};

const styles = {
  fadeInDown: {
    animation: 'x 1s',
    animationName: Radium.keyframes(fadeInDown, 'fadeInDown'),
  },
  fadeIn: {
    animation: 'x 5s',
    animationName: Radium.keyframes(fadeIn, 'fadeIn'),
  },
  fadeIn2: {
    animation: 'x 8s',
    animationName: Radium.keyframes(fadeIn, 'fadeIn'),
  },
};
