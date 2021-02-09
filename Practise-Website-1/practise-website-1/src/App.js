import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function Checkbox() {
  const [checked, setChecked] = useState(false);
  
  useEffect(() => {
    alert(`checked : ${checked.toString()}`);
  });

  return (
    <>
      <input type="checkbox" value={checked} onChange={()=> setChecked(checked=>!checked)} ></input>
      </>
  )
}




function App() {  

  return (
    <div>
      <Checkbox></Checkbox>
    </div>
  );
}

export default App;
