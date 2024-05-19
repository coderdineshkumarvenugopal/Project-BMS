import React from 'react'
import './App.css'
import NavBar from './components/NavBar'
import MovieCard from './components/MovieCard'
import Carousel from './components/Carousel'
import MovieBooking from './components/MovieBooking'
import Ads from'./components/Ads'
const movies = [
  {
      id: 1,
      title: "Thunivu",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfvHA_e3ZUHhq-QVgvp4EZl6onkMwx9HKv34MZJKsb6w&s",

  },

  {
      id: 2,
      title: "Varisu",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfvHA_e3ZUHhq-QVgvp4EZl6onkMwx9HKv34MZJKsb6w&s",

  },
  

  {
      id: 3,
      title: "Leo",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfvHA_e3ZUHhq-QVgvp4EZl6onkMwx9HKv34MZJKsb6w&s",

  },
  
];
export default function App() {
  return (
    <>
    <NavBar/>
    <Ads/>
    <MovieCard
        title="Avengers: Endgame"
        image="https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg"
        genre="Action, Adventure, Drama"
        rating="8.4"
      />
    </>
  )
}
