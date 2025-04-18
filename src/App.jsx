import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Hero1 from "./components/Hero1";
import Hero2 from "./components/Hero2";
import Real from './components/Real'
import Expert from "./comp1/Expert";
import Property from './comp1/Property'
import Conversions from "./comp1/Conversions";
import Conversions1 from "./comp1/Conversions1";
import Peace from "./comp2/Peace";
import Videos from './comp2/Videos';
import Connect from "./comp2/Connect";



function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Hero1/>
      <Hero2/>
      <Real/>
 <Expert/>
    <Property/>
    <Conversions/>
    <Conversions1/>
    <Peace/>
<Videos/>
<Connect/>
<Footer/>

    </div>
  );
}

export default App;
