

import './App.css';
import Home from './components/Home';
import { BrowserRouter as Main, Route, Routes } from 'react-router-dom';
import Jeeta from './components/Jeeta';
import Navbar from './components/Navbar';
import Humsafar from './components/humsafar';
import Kuch from './components/kuch';
import Dil from './components/dil';
import Umar from './components/umar';
import Mera from './components/mera';
import Pyar from './components/pyar';
import Bakhuda from './components/bakhuda';
import Maine from './components/maine';

function App() {
  return (
    <>
      <Main>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/jeeta' element={<Jeeta />} />
          <Route exact path='/humsafar' element={<Humsafar />} />
          <Route exact path='/kuch' element={<Kuch />} />
          <Route exact path='/dil' element={<Dil />} />
          <Route exact path='/umar' element={<Umar />} />
          <Route exact path='/mera' element={<Mera />} />
          <Route exact path='/pyar' element={<Pyar />} />
          <Route exact path='/bakhuda' element={<Bakhuda />} />
          <Route exact path='/aate' element={<Maine />} />
        </Routes>
      </Main>
    </>
  );
}


export default App;
