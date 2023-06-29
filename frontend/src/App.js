import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import Products from "./pages/Products";
// import Contact from "./Contact";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" component={Home} />
        <Route path="/products" component={Products} />
      </Routes>
    </Router>
  );
}

export default App;
