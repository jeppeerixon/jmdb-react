import React from "react";
import { useNavigate } from 'react-router-dom';

const MovCard = ({ par }) => {

    const navigate = useNavigate();

    const navigateToTitle = (e) => {
        let movieID = e.target.value;
        console.log(movieID);
        navigate('/title', {
            state: {
              movieId: movieID,
            }
          });
        
    };

    return (
        <>
        <div className="searchCard" id={par.imdbID}>
        <h3> {par.Title} </h3>
        <p> {par.Year} </p>
        <button value={par.imdbID} onClick={navigateToTitle}>Read More</button>
        </div>
        </>
    );
}

export default MovCard;