import { useSelector } from 'react-redux';
import {
  selectContacts,
  selectLoading,
  selectError,
  selectFilter,
  selectFilteredContacts,
} from './selectors';

import { getAuthLoginValue, getAuthIsLoggedInValue } from './authSlice';

export const useGetState = () => {
  return {
    contacts: useSelector(selectContacts),
    isLoading: useSelector(selectLoading),
    error: useSelector(selectError),
    filter: useSelector(selectFilter),
    login: useSelector(getAuthLoginValue),
    isLoggedIn: useSelector(getAuthIsLoggedInValue),
    filteredContacts: useSelector(selectFilteredContacts),
  };
};
