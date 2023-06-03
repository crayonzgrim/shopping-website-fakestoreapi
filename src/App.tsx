import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header } from "./components/organisms";
import { Sidebar } from "./components/organisms/Sidebar";
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
