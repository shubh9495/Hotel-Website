import './App.css';
import Main from "./components/files/main";
import Navbar from "./components/files/Navbar";
import View from "./components/files/View";
import Gallery from "./components/files/Gallery";
import Reviews from "./components/files/Reviews";
import Login from "./components/files/login";
import Footer from "./components/files/footer";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';

const App = () => {
  const [user, setLoginUser] = useState({});

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={user && user._id ? <Main /> : <Login setLoginUser={setLoginUser} />} />
          <Route path='/main' element={<Main />} />
          <Route path='/view' element={<View />} />
          <Route path='/Main' element={<Main />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/reviews' element={<Reviews />} />
          <Route path='/login' element={<Login setLoginUser={setLoginUser} />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
