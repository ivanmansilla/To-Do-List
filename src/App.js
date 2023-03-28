// import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddTask from './pages/AddTask';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import './App.css';


const App = () => {

  return (    
        <BrowserRouter>
          <div className="App">
            <section className="App-content">
              <Navbar/>
              <Routes>
                <Route path='/' element={<Login/>} />
                <Route path='/AddTask' element={<AddTask/>} />
              </Routes>
            </section>
          </div>
        </BrowserRouter>
  );
}

export default App;
