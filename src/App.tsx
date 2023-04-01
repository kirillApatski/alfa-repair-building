import React from 'react';
import './App.css';
import Header from "./components/layout/Header/Header";
import HomePage from "./components/HomePage/HomePage";

function App() {
  return (
    <div className="appWrapper">
      <Header/>
      <HomePage/>
    </div>
  );
}

export default App;
