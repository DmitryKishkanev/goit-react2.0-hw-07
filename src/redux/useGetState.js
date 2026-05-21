import { useSelector } from 'react-redux';
import { getContactsValue } from './contact/contactsSlice';
import { getFilterValue } from './filter/filterSlice';
import { getAuthLoginValue, getAuthIsLoggedInValue } from './auth/authSlice';

export const useGetState = () => {
  return {
    contacts: useSelector(getContactsValue),
    filter: useSelector(getFilterValue),
    login: useSelector(getAuthLoginValue),
    isLoggedIn: useSelector(getAuthIsLoggedInValue),
  };
};
