import { Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
import FoodForm from './components/FoodForm';
import Register from './components/Register';
import Trust from './components/Trust';
import Footer from './components/Footer';
import Login from './components/Login';
import Signup from './components/Signup';
import About from './components/About';
import Card from './components/Card';
import User from './components/User';
import { AuthProvider } from './components/Auth';
import { RequireAuth } from './components/RequireAuth';

function App() {
  return (
    <AuthProvider>
      <div>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="login" element={<Login />} />
          <Route exact path="signup" element={<Signup />} />
          <Route exact path="about" element={<About />} />
          <Route exact path="foodform" element={<RequireAuth><FoodForm /></RequireAuth>} />
          <Route excat path="register" element={<RequireAuth><Register /></RequireAuth>} />
          <Route Exact path="trust" element={<RequireAuth><Trust /></RequireAuth>} />
          <Route Exact path="user" element={<RequireAuth><User /></RequireAuth>} />
        </Routes>
        <Footer />
      </div>
    </AuthProvider>
  );
}

export default App;
