import { createContext } from 'react';

export const UserInfoContext = createContext({
  name: '',
  st: '',
  numb: '',
  city: '',
  postal: '',
  phone: '',
});

export const UserOrder = createContext({});
