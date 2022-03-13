import React, { useState, useEffect } from 'react';
import UserInfroForm from '../../components/user-info-form/UserInfoForm';
import { UserInfoContext } from '../../context/userInfoContext';
const Home = () => {
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
      </UserInfoContext.Provider>
    </div>
  );
};
export default Home;
