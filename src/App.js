import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./pages/Nav";
import Form from "./pages/form";
import "./index.css";
import Recipies from "./pages/recipies";
import Contact from "./pages/contact";
import Popular from "./pages/popular";
import Description from "./components/description";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/form" element={<Form />} />
          <Route path="/" element={<Nav />} />
          <Route path="/Recipies" element={<Recipies />} />
          <Route path="/contactus" element={<Contact />} />
          <Route path="/popular" element={<Popular />} />
          <Route path="/description" element={<Description />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
