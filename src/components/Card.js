import React from 'react';
import './Card.css';
const movieData=[
    {
      "image": "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg",
      "title": "Movie Title 1",
      "description": "Movie description 1"
    },
    {
      "image": "https://example.com/movie2.jpg",
      "title": "Movie Title 2",
      "description": "Movie description 2"
    },
    {
      "image": "https://example.com/movie3.jpg",
      "title": "Movie Title 3",
      "description": "Movie description 3"
    }
  ]
const Card = () => {
  return (
    <div className="card">
      <img className="cardimage" src={movieData[0].image} alt="Movie Poster" />
      <h2 className="cardtitle">{movieData[0].title}</h2>
      <p className="cardtext">{movieData[0].description}</p>
    </div>
  );
};

export default Card;