import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from './components/Home/Home';
import { Footer } from './components/Footer/Footer';
import { About } from './components/About';
//import { Navbar } from './components/Navbar/Navbar';
import { Prva } from './components/Public/Prva/Prva';
import { Druga } from './components/Public/Druga/Druga';
import { Treca } from './components/Public/Treca/Treca';
import { Cetvrta } from './components/Public/Cetvrta/Cetvrta';
import { Signin } from './components/Public/Login/Signin';
import Profile from './components/Public/Login/Profile';

function App() {


  //const [authorized, setAuthorized] = useState(false); //  komponenta ce biti false sve dok korisnik ne izvrši prijavu. Kada se korisnik prijavi, setAuthorized funkcija se poziva sa true argumentom i authorized state se ažurira na true.
  const [authorized, setAuthorized] = useState(localStorage.getItem('authorized') === 'true');

  //const navigate = useNavigate();

  // useEffect(() => {
  //   const authorized = localStorage.getItem('authorized');
  //   if (authorized) {
  //     setAuthorized(true);
  //   } else {
  //     navigate('/signin');
  //   }
  // }, [navigate]);


  // poziva se svaki put kada se promeni vrednost authorized state-a
  useEffect(() => {
    if (authorized) {
      localStorage.setItem('authorized', true);
    } else {
      localStorage.removeItem('authorized');
    }
  }, [authorized]);


  return (
    <>
    {/* <Navbar /> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/prva' element={<Prva />} />
        <Route path='/druga' element={<Druga />} />
        <Route path='/treca' element={<Treca />} />
        <Route path='/cetvrta' element={<Cetvrta />} />

        <Route path='/signin' element={<Signin setAuthorized={setAuthorized} />} />
        <Route path='/profile' element={<Profile authorized={authorized}/>} />
        
      </Routes>
      <Footer />
    </>
  );
}

export default App;
