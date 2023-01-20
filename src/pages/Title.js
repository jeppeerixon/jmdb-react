import { useLocation } from "react-router-dom";

const Title = () => {
  const location = useLocation();

  // get userId
  let movieID = location.state.movieId;

  return (
  <>
  <h1>Title</h1>
  <p> { movieID }</p>
  </>
)};
  
export default Title;