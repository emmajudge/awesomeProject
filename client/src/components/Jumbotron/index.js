import React from "react";
import "./jumbotron.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';



function Jumbotron() {
  return (
    <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true} showStatus={false} interval={7000}>
      <div className="jumbotronImg_1">
        {/* <img src="./test.jpg" /> */}
        <p className="legend">Legend 1</p>
      </div>
      <div className="jumbotronImg_2">
        {/* <img src="assets/2.jpeg" /> */}
        <p className="legend">Legend 2</p>
      </div>
      <div className="jumbotronImg_3">
        {/* <img src="assets/3.jpeg" /> */}
        <p className="legend">Legend 3</p>
      </div>
    </Carousel>


  );
}


export default Jumbotron;
