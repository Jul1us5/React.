import React from "react";
import "./App.scss";
import "normalize.css";
import Header from "./components/Header/Header";
import Section from "./components/Section/Section";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import Dialogs from "./components/Dialogs/Dialogs";
import Profile from "./components/Profile/Profile";
import Home from "./components/Home/Home";
import Settings from "./components/Settings/Settings";
import { BrowserRouter, Route } from "react-router-dom";

let MessageData = [
  {
    id: 1,
    text: "Hi",
  },
  {
    id: 2,
    text: "My name is Julius",
  },
  {
    id: 3,
    text: "I creating Single page application",
  },
  {
    id: 4,
    text: "React!",
  },
];

let AuthorData = [
  {
    name: "Julius",
    id: 1,
  },
  {
    name: "Evelina",
    id: 2,
  },
  {
    name: "Natalija",
    id: 3,
  },
  {
    name: "Paulius",
    id: 4,
  },
  {
    name: "Arturas",
    id: 5,
  },
];

const App = () => {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <Nav />
        <Home />
        <Route path="/dialogs" render={ () => <Dialogs MessageData={MessageData} AuthorData={AuthorData}/>} />
        <Route path="/section" render={ () => <Section />} />
        <Route path="/profile" render={ () => <Profile />} />
        <Route path="/settings" render={ () => <Settings />} />
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
