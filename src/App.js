import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Routes/home/index';
import Treino from './Routes/Treino/index'
import Exercicios from './components/Exercicios/index'
// import About from './About';
// import NotFound from './NotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/treino" element={ <Treino /> } />
        <Route path="/exercicios" element={ <Exercicios/> } />

        {/* <Route path="*" element={ <NotFound /> } /> */}
      </Routes>
    </Router>
  );
}

export default App;