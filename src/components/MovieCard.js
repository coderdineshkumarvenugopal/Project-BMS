// import React from 'react'
// import './MovieCard.css'
// const MovieCard = ({ title, image, genre, rating }) => {
//   return (
//     <div className="name123">
//       <img src={image} alt={title} className="movie-poster" />
//       <div className="movie-details">
//         <h3 className="movie-title">{title}</h3>
//         <p className="movie-genre">{genre}</p>
//         <div className="movie-info">
//           <p className="movie-rating">Rating: {rating}</p>
//           <button className="btn btn-primary">Book Tickets</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MovieCard;
import React from 'react'
import Card from './Card'
import './MovieCard.css'

export default function MovieCard() {
  return (
    <div className='moviecard'>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      
      
    </div>
  )
}
