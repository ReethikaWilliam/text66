import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { toggleDarkMode } from './features/darkModeSlice';


function App() {
  const {mode} = useSelector((state) => state.darkMode);
  const dispatch = useDispatch();    //we can extract the actions(reducer)
  return (
    <div style={{background:mode? 'black': 'white', height:'100vh'}} >
      <button onClick={() =>dispatch(toggleDarkMode())}>Dark Mode</button>
    
    <store/>
    </div>
  );
}

export default App;
