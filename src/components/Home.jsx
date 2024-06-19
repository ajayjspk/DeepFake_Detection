import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Footer from  './Footer';
import FileUpload from './FileUpload';
import Contact from './Contact';
import { BrowserRouter, Routes, Route } from "react-router-dom";


export default function Home() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <FileUpload/>
    <hr/>
    <About/>
    <hr/>
    <Contact/>
    <Footer/>
    </>
  )
}
