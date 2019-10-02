import React from "react";
import "./style.css";
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function ImageSlides() {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="/images/gentlebarn.jpg"
                    alt="First slide"
                />
                <Carousel.Caption>
                  <a href="/donate"><h3>GENTLE BARN</h3></a>  
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="/images/makeAChange.jpg"
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h3>NAME OF THE FEATURED CHARITY 2</h3>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="images/kidsPeaceSigns.jpg"
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>NAME OF THE FEATURED CHARITY 3</h3>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}
export default ImageSlides;
