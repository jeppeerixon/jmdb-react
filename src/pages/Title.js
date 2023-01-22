import { useLocation } from "react-router-dom";
import { useState, useEffect } from 'react';

const apiUrl = 'http://omdbapi.com?apikey=40f5ebcb'

const Title = () => {
  const location = useLocation();
  // get userId
  let movieID = location.state.movieId;

  console.log(movieID);

  const [titles, setTitles] = useState([]);

  const findTitle = async (title) => {
    const response = await fetch(`${apiUrl}&i=${title}`);
    const data = await response.json();

    setTitles(data);
  }

  useEffect(() => {
    findTitle(movieID)
  }, [movieID]);

  return (
  <>
  <h1> { titles.Title } </h1>
  <img src={titles.Poster} alt="Poster for title"></img>
  <p> { titles.imdbRating }</p>
  <p> { titles.Year }</p>
  <p> { titles.Plot }</p>
  </>
)};
  
export default Title;