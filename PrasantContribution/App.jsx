import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';
import CardFlip from './components/CardFlip';

function App() {
  

  return (
    
    <>
    <Navbar />
    <div className="max-w-7xl mx-auto pt-20 px-6">
    <HeroSection />
    <CardFlip />
    <Footer/>

    </div>
    </>
  );
};

export default App
