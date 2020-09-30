import React from "react";
import "./App.scss";
import 'normalize.css';
import Header from "./components/Header/Header";

const App = () => {
  return <div className="App">
    <Header />
    <nav>Navigation</nav>
    <section>Section</section>
    <footer>Footer</footer>
  </div>;
};

export default App;
