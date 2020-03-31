import React from 'react';
import logo from './logo.svg';
import './App.css';
import Car from "./Car";

function App() {
  const cartype="Ford";
  return (
   <div>
    <Car car_type={cartype} color="white" />
    <Car car_type="Nissan" color="red"/>
    <Car car_type="Volvo" color="black"/>
   </div>

);
}

export default App;
