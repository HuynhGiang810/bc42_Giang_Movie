
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './modules/Home/Home';
import MoviesDetail from './modules/MoviesDetail/MoviesDetail';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="/movies/:moviesId" element={<MoviesDetail/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
