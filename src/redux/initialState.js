// import initialContact from '@/contacts.json';

export const initialState = {
  contacts: {
    // items: initialContact,
    items: [],
    loading: false,
    error: null,
  },
  filters: {
    name: '',
  },
  auth: {
    login: '',
    isLoggedIn: false,
  },
};
