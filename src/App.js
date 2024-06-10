import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Team from "./components/Team";
import Project from "./components/Project";
import CategoryList from "./components/CategoryList";
import CategoryPage from "./components/CategoryPage";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/project/:title" element={<Project />} />
        <Route path="/team" element={<Team />} />
        <Route path="/categories" element={<CategoryList />} />
        <Route path="/category/:categoryId" element={<CategoryPage />} />
      </Routes>
      {/* <Footer /> */}
      <Toaster />
    </>
  );
}

export default App;
