
import { configureStore } from '@reduxjs/toolkit';
import slidesReducer from './slidesSlice';

const store = configureStore({
  reducer: {
    slides: slidesReducer
  }
});

export default store;
