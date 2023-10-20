import './App.css';
import React, { useState } from 'react';

const appStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
};

function App() {
   
  let [count , setCount] = useState(0);
  
   const increment = () => {
    setCount(count + 1);
   }

   const decrement = () => {
    setCount(count - 1);
    if(count <= 0){
      setCount(count = 0);
    }
   }

  return (
    <div style ={appStyle}> 
      <h1>Counter App using react</h1>
      <p>Counter : {count}</p>
      <button onClick = {increment} >+</button>
      <button onClick = {decrement}>-</button>
    </div >
  );
}

export default App;
