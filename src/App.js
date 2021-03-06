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
import Users from "./components/Users/Users";
import { Route } from "react-router-dom";

const App = (props) => {
  return (
    <div className="wrapper">
      <Header />
      <Nav />
      <Home />
      <Route path="/dialogs" render={() => <Dialogs />} />
      <Route path="/section" render={() => <Section />} />
      <Route path="/profile" render={() => <Profile />} />
      <Route path="/users" render={() => <Users />} />
      <Route path="/settings" render={() => <Settings />} />
      <Footer />
    </div>
  );
};

export default App;
