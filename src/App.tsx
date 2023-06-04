import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Footer, Header, Sidebar } from "./components/organisms";
import { Hero, Home, ProductDetail } from "./components/pages";

function App() {
  return (
    <div className="overflow-hidden">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/products" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
        <Sidebar />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
