// src/App.js
import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Book from "./components/Book";
import Package from "./components/Package";
import Service from "./components/Service";
import Gallery from "./components/Gallery";
import Review from "./components/Review";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Brand from "./components/Brand";

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Book />
      <Package />
      <Service />
      <Gallery />
      <Review />
      <Contact />
      <Brand />
      <Footer />

    </div>
  );
};

export default App;
