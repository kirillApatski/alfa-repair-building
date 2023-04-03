import React from 'react';
import './App.css';
import Header from "./layout/Header/Header";
import CasePage from "./components/CasePage/CasePage";
import Footer from "./layout/Footer/Footer";
import Feedback from "./components/CasePage/Feedback/Feedback";

function App() {
  return (
    <div className="appWrapper">
      <Header/>
      <CasePage/>
      <Feedback/>
      <Footer/>
    </div>
  );
}

export default App;
