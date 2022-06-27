import React from 'react';
import './styles/App.css';

import Navbar from './components/Navbar';
import Main from './components/Main';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Main />
    </div>
  );
}

export default App;
