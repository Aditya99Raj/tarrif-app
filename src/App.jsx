
import './App.css';
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Signup from "./components/Login/Signup";
import Signin from "./components/Login/Signin";
import Home from "./components/Login/Home"
function App() {
  return (
    <div className="App">
      <Home/>
     <Routes>
        {/* <Route path="/" element={<Home/>}></Route> */}
        <Route path="/signin" element={<Signin />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
      
      </Routes>
    </div>
  );
}

export default App;
