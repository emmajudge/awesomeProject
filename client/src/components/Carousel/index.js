import React from "react";
import "./style.css";
import { Carousel } from 'react-bootstrap';
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
                  <a href="/donate"><h3>THE GENTLE BARN</h3></a>  
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
