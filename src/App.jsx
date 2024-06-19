import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoPage from './components/NoPage';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Login />} />
          <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  )
}
