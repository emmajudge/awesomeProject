import React from "react";
import "./style.css";
import { Carousel } from 'react-bootstrap';

function ImageSlides() {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="/images/handsHeart.jpg"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Let's...</h3>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="/images/makeAChange.jpg"
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h3>Make a change...</h3>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="images/kidsPeaceSigns.jpg"
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>together!</h3>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}
export default ImageSlides;
