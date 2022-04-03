import './App.css';
import { useState } from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import OrdersPage from './pages/Order/Orders';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path='orders' element={<OrdersPage />}></Route>
        </Routes>
      </BrowserRouter>
      <h1>hello</h1>
    </div>
  );
}

export default App;
