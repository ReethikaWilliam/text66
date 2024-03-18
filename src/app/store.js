import {configureStore} from '@reduxjs/toolkit';
import darkModeReducer from '../features/darkModeSlice';


export const store = configureStore({
  reducer:{                                     //reducer-- redux property   creating state
    darkMode :darkModeReducer
  }
})