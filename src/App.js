import './App.css';
import { useState } from 'react';
import { render } from 'react-dom';
import { UserInfoContext } from './context/userInfoContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import OrdersPage from './pages/Order/Orders';

function App() {
  const [info, setInfo] = useState({
    name: '',
    st: '',
    numb: '',
    city: '',
    postal: '',
    phone: '',
  });
  return (
    <div className='App'>
      <UserInfoContext.Provider value={{ info, setInfo }}>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path='orders' element={<OrdersPage />}></Route>
          </Routes>
        </BrowserRouter>
      </UserInfoContext.Provider>
    </div>
  );
}

export default App;
