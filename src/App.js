import React from "react";
import "./App.css";
import HeaderContainer from './Containers/HeaderContainer'
import HomeContainer from './Containers/HomeContainer'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CartContainer from "./Containers/CartContainer";
import CardDetailsContainer from "./Containers/CardDetailsContainer";

function App() {
  return(
    <div> 
      <BrowserRouter>
      <HeaderContainer/>
      <Routes>
        <Route path="/" exact element={<HomeContainer/>}></Route>
        <Route path="/cart" element={<CartContainer/>}></Route>
        <Route path="/cart/:id" element={<CardDetailsContainer/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
