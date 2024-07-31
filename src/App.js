import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Team from "./components/Team";
import Publications from "./components/Publications";
import Project from "./components/Project";
import CategoryList from "./components/CategoryList";
import CategoryPage from "./components/CategoryPage";
import { Toaster } from "react-hot-toast";
import Signup from "./components/Signup";
import VerifyEmails from "./components/VerifyEmail";
import Login from "./components/Login";
import Dashboard from "./components/admin/Dashboard";
import ProfileList from "./components/ProfileList";
import ProjectList from "./components/ProjectList";
import SinglePost from "./components/SinglePost";

import Publication from "./components/publicatoin";
function App() {
  const location = useLocation();

  const paths = ["/admin/dashboard", "/admin/login", "/admin/signup", "/admin/verify-email", "/admin/profile"];

  const showNavbarAndFooter = !paths.includes(location.pathname.toLowerCase());

  return (
    <>
      {showNavbarAndFooter && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/project/:title" element={<Project />} />
        <Route path="/team" element={<Team />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/categories" element={<CategoryList />} />
        <Route path="/category/:categoryId" element={<CategoryPage />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/verify-email" element={<VerifyEmails/>}/>
        <Route path="/login" element= {<Login/>}/>
        <Route path="/admin/dashboard" element={<Dashboard/>}/>
        <Route path="/profile" element= {<ProfileList/>}/>
        <Route path="post" element={<ProjectList/>}/>
        <Route path="post/:postId" element={<SinglePost/>}/>
        <Route path="pub" element={<Publication/>}/>
      </Routes>
      {showNavbarAndFooter && <Footer />}
      <Toaster />
    </>
  );
}

export default App;
