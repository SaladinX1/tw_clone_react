
import React from "react";
import './App.css';
import Header from '../src/components/Header/Header'
import Sidebar from '../src/components/Sidebar/Sidebar'
import Games from './components/Games/Games';
import TopStreams from './components/TopStreams/TopStreams';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
//import dotenv from 'dotenv';

//dotenv.config();

function App() {
  return (

    <Router>


    <div className="App">
      <Header />
      <Sidebar />
      <Routes>
        <Route path="/" exact element={<Games/>} />
        <Route path="/top-streams" exact element={<TopStreams/>} />
        </Routes>
    </div>


    </Router>
  );
}

export default App;
