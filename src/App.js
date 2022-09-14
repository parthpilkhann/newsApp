import React from 'react';
import Navbar from "./components/Navbar.js";
import News from "./components/News.js"
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

export default function App() {


  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<News pageSize={6} category="general" />} />
        <Route path="/business" element={<News pageSize={6} category="business" />} />
        <Route path="/general" element={<News pageSize={6} category="general" />} />
        <Route path="/science" element={<News pageSize={6} category="science" />} />
        <Route path="/sports" element={<News pageSize={6} category="sports" />} />
        <Route path="/health" element={<News pageSize={6} category="health" />} />
        <Route path="/technology" element={<News pageSize={6} category="technology" />} />
        <Route path="/entertainment" element={<News pageSize={6} category="entertainment" />} />
      </Routes>
    </Router>
  )
}
