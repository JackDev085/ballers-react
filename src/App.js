import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Routes/home/index';
import Arremesso from './Routes/arremesso';
// import About from './About';
// import NotFound from './NotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/arremesso" element={ <Arremesso /> } />
        {/* <Route path="*" element={ <NotFound /> } /> */}
      </Routes>
    </Router>
  );
}

export default App;