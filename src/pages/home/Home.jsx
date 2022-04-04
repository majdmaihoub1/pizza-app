import React, { useState, useEffect } from 'react';
import UserInfroForm from '../../components/user-info-form/UserInfoForm';
import OrderForm from '../../components/order-form/OrderForm';
import PaymentForm from '../../components/payment-form/PaymentForm';
import { OrderStepper } from '../../components/stepper/Stepper';
const Home = (total) => {
  return (
    <div>
      <OrderStepper />
      {/* <UserInfroForm />
      <OrderForm total={total} />
      <PaymentForm /> */}
    </div>
  );
};
export default Home;
