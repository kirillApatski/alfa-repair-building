import React from 'react';
import './App.css';
import Header from "./layout/Header/Header";
import CasePage from "./components/CasePage/CasePage";
import Footer from "./layout/Footer/Footer";

function App() {
  return (
    <div className="appWrapper">
      <Header/>
      <CasePage/>
      <Footer/>
    </div>
  );
}

export default App;
