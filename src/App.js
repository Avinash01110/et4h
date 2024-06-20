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
import Signup from "./components/Signup";
import VerifyEmails from "./components/VerifyEmail";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import ProfileList from "./components/ProfileList";
import ProjectList from "./components/ProjectList";
import SinglePost from "./components/SinglePost";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/project/:title" element={<Project />} />
        <Route path="/team" element={<Team />} />
        <Route path="/categories" element={<CategoryList />} />
        <Route path="/category/:categoryId" element={<CategoryPage />} />
        <Route path="*" element={<Home />} />
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/verify-email" element={<VerifyEmails/>}/>
        <Route path="/login" element= {<Login/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/profile" element= {<ProfileList/>}/>
        <Route path="post" element={<ProjectList/>}/>
        <Route path="post/:postId" element={<SinglePost/>}/>
      </Routes>
      <Footer />
      <Toaster />
    </>
  );
}

export default App;
