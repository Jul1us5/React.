import React from "react";
import "./App.scss";
import 'normalize.css';
import Header from "./components/Header/Header";
import Section from "./components/Section/Section"
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";

const App = () => {
  return <div className="wrapper">
    <Header />
    <Nav />
    <Section />
    <Footer />
  </div>;
};

export default App;
