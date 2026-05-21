import { createSlice } from '@reduxjs/toolkit';
import { initialState } from '@/redux/initialState';
import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// ставим дополнительно npm install localforage - для решения проблемы с localStorege
import localforage from 'localforage';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: initialState.filters,
  reducers: {
    changeFilter(state, action) {
      state.name = action.payload;
    },
  },
});

const PersistConfig = {
  key: 'filters',
  // Вот так его используем
  storage: localforage,
};

export const filtersReducer = persistReducer(
  PersistConfig,
  filtersSlice.reducer,
);

export const { changeFilter } = filtersSlice.actions;

export const getFilterValue = state => state.filters.name;
