import { useState, useEffect } from 'react';

import MovCard from './Components/MovCard';

// key: 40f5ebcb

const apiUrl = 'http://omdbapi.com?apikey=40f5ebcb'

function Search() {

  const [films, setFilms] = useState([]);
  const [searchInput, setSearchInput] = useState('');

  const findMovies = async (title) => {
    const response = await fetch(`${apiUrl}&s=${title}`);
    const data = await response.json();

    setFilms(data.Search);
  }

  useEffect(() => {
    findMovies('batman')
  }, []);
  
  return (
    <div className="Search">
        <header>
            <h1>JMDB</h1>
            <input placeholder='Search for movie or tv show' value={searchInput} onChange={(e) => setSearchInput(e.target.value)}></input>
            <button onClick={() => findMovies(searchInput)}>Sök</button>
        </header>
        <div>
            {films.map((movie) => {
            return <MovCard par={movie} key={movie.imdbID} />
            })}
        </div>
    </div>
  );
}

export default Search;