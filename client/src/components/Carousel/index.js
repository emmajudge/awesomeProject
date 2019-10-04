import React from "react";
import "./style.css";
import { Carousel, ButtonToolbar, Button } from "react-bootstrap";
// import { Link } from 'react-router-dom';

function ImageSlides() {
  return (
    // Set carousel slide time interval to 5 seconds each
    <Carousel interval={6000}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/gentlebarn.jpg"
          alt="slide_1"
        />
        <Carousel.Caption>
          <ButtonToolbar>
            <Button href="/viewFeatured" variant="warning">LEARN MORE</Button>
          </ButtonToolbar>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/gb_cowsBanner.jpg"
          alt="slide_2"
        />
        <Carousel.Caption>
          <h3>...</h3>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/gb_Lolli_goat.jpg"
          alt="slide_3"
        />
        <Carousel.Caption>
          <h3></h3>
          <ButtonToolbar>
          <Button href="https://www.gentlebarn.org/happy-1st-birthday-lolli" variant="warning">Who is Lolli?</Button>
          </ButtonToolbar>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/gb_newsImage.jpg"
          alt="slide_4"
        />
        <Carousel.Caption>
          <h3>...</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
export default ImageSlides;
