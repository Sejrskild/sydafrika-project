import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home, Navbar, Gallery, Kontakt, OmHuset, Error } from "./components";

function App() {
  return (
    <Router basename="/sydafrika">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/om-huset" element={[<OmHuset />, <Navbar />]} />
        <Route path="/billeder" element={[<Gallery />, <Navbar />]} />
        <Route path="/kontakt" element={[<Kontakt />, <Navbar />]} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
