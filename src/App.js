import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout/Layout";
import Homepage from "./pages/HomePage/Homepage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
