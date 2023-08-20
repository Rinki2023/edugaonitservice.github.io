import React from 'react';
import Carousel from "react-bootstrap/Carousel";

function Slider() {
  const myStyle = {
    color: "#1AB6B3",
  };
  const myStyle2 = {
    color: "#DA7815",
  };
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="http://edugaon.com/images/slider/slider_software1.png"
          alt="First slide"
        />
        <Carousel.Caption>
          <h2 style={myStyle}>Edugaon Technology Pvt Ltd</h2>
          <h3 style={myStyle2}>Professional Diploma in Software Engineering</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="https://www.newnettechnologies.com/images/blogs/InsiderThreat.jpg"
          alt="Second slide"
          height="700"
        />
        <Carousel.Caption>
          <h2 style={myStyle}>Edugaon Technology Pvt Ltd</h2>
          <h3 style={myStyle2}>Professional Diploma in Software Engineering</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          height="700"
          src="images/soft.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h2 style={myStyle}>Edugaon Technology Pvt Ltd</h2>
          <h3 style={myStyle2}>English Communication Skills</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          height="700"
          src="https://quotefancy.com/media/wallpaper/3840x2160/4648319-Shawn-Fanning-Quote-If-you-think-about-computer-programming-it-s.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h2 style={myStyle}>Edugaon Technology Pvt Ltd</h2>
          <h3 style={myStyle2}>English Communication Skills</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          height="700"
          src="https://www.swansol.com/wp-content/uploads/Manufacturing-Giant-Handles-Network-Infrastructure-with-Swan-So.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h2 style={myStyle}>Edugaon Technology Pvt Ltd</h2>
          <h3 style={myStyle2}>English Communication Skills</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;
