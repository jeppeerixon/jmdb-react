import { Outlet, Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/search">Search</Link>
          </li>
          <li>
            <Link to="/title">Title</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Home;