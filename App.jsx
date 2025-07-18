import React from "react";
import './App.css';
import {Header} from './components/header.jsx'
import { Hero } from "./components/Hero.jsx";
import { About } from "./components/About.jsx";
import { Services } from "./components/Services.jsx";
import { WorkTogether } from "./components/WorkTogether.jsx";
import { Strip } from "./components/Strip.jsx";
import { ContactForm } from "./components/ContactForm.jsx";
import { Footer } from "./components/Footer.jsx";
import { Loader } from "./components/Loader.jsx";
import { useState, useEffect } from "react";
import { TrialForm } from "./components/TRialForm.jsx";

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Adjust time as needed or replace with actual condition

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="font-['Neue_Montreal']">
           <Header/>
           <Hero/>
           <About/>
           <Services/>
           <WorkTogether/>
           <Strip/>
           <ContactForm/>
           <Footer/>
        </div>
      )}
    </>
  );

  
}

export default App
