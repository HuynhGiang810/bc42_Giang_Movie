
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './modules/Home/Home';
import MoviesDetail from './modules/MoviesDetail/MoviesDetail';
import MainLayout from './layouts/MainLayout/MainLayout';
import Signin from './modules/Auth/SignIn/SignIn';
import Signup from './modules/Auth/SignUp/SignUp';
import ProtectedRoute from './route/ProtectedRoute';
import Booking from './modules/Booking/Booking';
import AuthLayout from './layouts/AuthLayout/AuthLayout';
import Header from './component/Header/Header';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/movies/:moviesId" element={<MoviesDetail />} />
          <Route
            path='booking/:bookingId'
            element={<ProtectedRoute>
              <Booking />
            </ProtectedRoute>} />
        </Route>

        <Route path='/' element={<AuthLayout />}>
          <Route path='/signin' element={<Signin />} />
          <Route path="/signout" element={<Signup />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
