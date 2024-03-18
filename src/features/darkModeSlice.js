import { createSlice } from '@reduxjs/toolkit'; //createslice---create slice  

const initialState={
  mode : JSON.parse(localStorage.getItem("darkMode")) || false,
}
export const darkModeSlice = createSlice({
  name : 'darkMode',
  initialState,                                 //initial state----
  reducers :{             //reducers---what function have to do
   toggleDarkMode :(state)=>{
         state.mode =!state.mode;
         localStorage.setItem("darkMode",JSON.stringify(state.mode));
   }
    
  }
  
});
export const {toggleDarkMode} =darkModeSlice.actions; //actions-tranfering data to store using actions
export default darkModeSlice.reducer;