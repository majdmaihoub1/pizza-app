import React, { useState, useEffect } from 'react';
import UserInfroForm from '../../components/user-info-form/UserInfoForm';
import { UserInfoContext } from '../../context/userInfoContext';
import OrderForm from '../../components/order-form/OrderForm';
import PaymentForm from '../../components/payment-form/PaymentForm';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
const Home = (total) => {
  const [info, setInfo] = useState({
    name: '',
    st: '',
    numb: '',
    city: '',
    postal: '',
    phone: '',
  });
  return (
    <div>
      <UserInfoContext.Provider value={{ info, setInfo }}>
        <UserInfroForm />
        <OrderForm total={total} />
        <PaymentForm />
      </UserInfoContext.Provider>
    </div>
  );
};
export default Home;
