import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./Shared/Navbar/Navbar";
import Home from "./components/Home/Home";
import SubHeader from "./components/SubHeader/SubHeader";
import Feature from "./components/Feature/Feature";
import HowWork from "./components/HowWork/HowWork";
import Benfits from "./components/Benfits/Benfits";
import Pricing from "./components/Pricing/Pricing";
import Sales from "./components/Sales/Sales";
import Faq from "./components/Faq/Faq";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <SubHeader />
      <Feature />
      <HowWork />
      <Benfits />
      <Pricing />
      <Sales />
      <Faq />
      <Footer />
    </>
  );
}

export default App;
