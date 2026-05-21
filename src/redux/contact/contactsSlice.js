import { createSlice } from '@reduxjs/toolkit';
import { initialState } from '@/redux/initialState';
import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// ставим дополнительно npm install localforage - для решения проблемы с localStorege
import localforage from 'localforage';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialState.contacts,
  reducers: {
    addContact(state, action) {
      // Добавляем контакт в конец списка
      // state.items.push(action.payload);

      // Добавляем контакт в начало списка
      state.items.unshift(action.payload);
    },
    deleteContact(state, action) {
      state.items = state.items.filter(
        contact => contact.id !== action.payload,
      );
    },
  },
});

const PersistConfig = {
  key: 'contacts',
  // Вот так его используем
  storage: localforage,
};

export const contactsReducer = persistReducer(
  PersistConfig,
  contactsSlice.reducer,
);

export const { addContact, deleteContact } = contactsSlice.actions;

// Selectors
export const getContactsValue = state => state.contacts.items;
