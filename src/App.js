import Home from './pages/Home';
import Search from './pages/Search';
import Title from './pages/Title';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
    
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Search />} />
          <Route path="search" element={<Search />} />
          <Route path="title" element={<Title />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
