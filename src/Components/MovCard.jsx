import React from "react";

const MovCard = ({ par }) => {
    return (
        <>
        <h3> {par.Title} </h3>
        <p> {par.Year} </p>
        </>
    );
}

export default MovCard;