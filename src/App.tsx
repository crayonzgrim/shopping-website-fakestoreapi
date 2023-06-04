import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header, Sidebar } from "./components/organisms";
import { Home } from "./components/pages";

function App() {
  return (
    <div className="overflow-hidden">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Sidebar />
      </Router>
    </div>
  );
}

export default App;
