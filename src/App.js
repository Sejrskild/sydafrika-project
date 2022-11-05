import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {Home, Navbar, Gallery, Kontakt, OmHuset, Footer} from "./components";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path='/om-huset' element={<OmHuset/> } />
        <Route path='/billeder' element={<Gallery/>} />
        <Route path='/kontakt' element={<Kontakt/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
