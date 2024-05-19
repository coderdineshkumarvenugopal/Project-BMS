import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

export default function MovieCard() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px',  }}>
      <Carousel>
        <Carousel.Item interval={1500}>
      <a href='#'>
          <img
            className="d-block w-100"
            src="https://img.nowrunning.com/content/movie/2020/valim-24606/bg_valimai.jpg"
            alt="Image One"
          />
          <Carousel.Caption>
            <h3>VALIMAI</h3>
            <p>murders, muggings, and other crimes skyrocket in the city through the treacherous activities of a bike gang that also peddles drugs. A sincere inspector, Arjun Kumar (Ajith Kumar), is tasked with the responsibility of locating the culprits</p>
          </Carousel.Caption>
          </a>
        </Carousel.Item>
        <Carousel.Item interval={1500}>
        <a href='#'>
          <img
            className="d-block w-100"
            src="https://img.nowrunning.com/content/movie/2023/thala-27593/bg3_leo.jpg"
            alt="Image Two"
          />
          <Carousel.Caption>
            <h3>LEO</h3>
            <p>The film follows Parthi, a café owner and animal rescuer in Theog, who is pursued by gangsters Antony and Harold Das who suspect him to be Antony's estranged son, Leo</p>
          </Carousel.Caption>
         </a>
        </Carousel.Item>
        <Carousel.Item interval={1500}>
        <a href='#'>
          <img
            className="d-block w-100"
            src="https://www.nowrunning.com/content/movie/2024/prema-28955/bg2_premalu.jpg"
            alt="Image One"
          />
          <Carousel.Caption>
            <h3>PREMALU</h3>
            <p>In the film, Sachin Santhosh, a graduate from Kerala, plans on moving to the United Kingdom, but instead goes to Hyderabad and take a GATE course, where he meets and falls in love with Reenu Roy, an employee of an IT company. Girish A. D.</p>
          </Carousel.Caption>
          </a>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}