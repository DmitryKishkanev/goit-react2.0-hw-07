import initialContact from '@/contacts.json';

export const initialState = {
  contacts: {
    items: initialContact,
  },
  filters: {
    name: '',
  },
  auth: {
    login: '',
    isLoggedIn: false,
  },
};
