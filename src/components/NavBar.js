import React, { useState } from 'react';
import './NavBar.css';

const NavBar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (event) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <a href="/">BookMyShow</a>
      </div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <a href="/movies">Movies</a>
        </li>
        <li className="nav-item">
          <a href="/events">Events</a>
        </li>
        <li className="nav-item">
          <a href="/plays">Plays</a>
        </li>
        <li className="nav-item">
          <a href="/sports">Sports</a>
        </li>
        <li className="nav-item">
          <a href="/activities">Activities</a>
        </li>
      </ul>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for movies, events, plays, and more..."
          value={searchQuery}
          onChange={handleSearch}
        />
        <button type="submit">
          <i className="fas fa-search"></i>
        </button>
      </div>
      <div className="navbar-right">
        <a href="/sign-in" className="btn btn-primary">
          Sign In
        </a>
        <a href="/register" className="btn btn-secondary">
          Register
        </a>
      </div>
    </nav>
  );
};

export default NavBar;