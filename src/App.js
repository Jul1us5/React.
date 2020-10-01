import React from "react";
import "./App.scss";
import "normalize.css";
import Header from "./components/Header/Header";
import Section from "./components/Section/Section";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import Dialogs from "./components/Dialogs/Dialogs";
import { BrowserRouter, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <Nav />
        <Section />
        <Route path='/dialogs' component={Dialogs}/>
        <Route path='/profile' component={Section}/>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
