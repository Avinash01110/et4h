import React, { useEffect, useState } from "react";
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
import PageNotFound from "./components/PageNotFound";

import Publication from "./components/publicatoin";

import Preloader from "./components/Preloader";
import Loader from "./components/Loader";
import FrontPagePosts from "./components/frontPagePosts";
import TeamManagement from "./components/TeamManagement";
import LogoManagement from "./components/LogoManagement";
function App() {

  const [showPreloader, setShowPreloader] = useState(true);
  const [loading, setLoading] = useState(false);

  const location = useLocation();

  const paths = ["/admin/dashboard", "/login", "/signup", "/verify-email", "/admin/profile"];

  const showNavbarAndFooter = !paths.includes(location.pathname.toLowerCase());

  useEffect(() => {
    if (showPreloader) {
      setTimeout(() => {
        setShowPreloader(false);
      }, 14100);
    }
  }, [showPreloader]);
  
  
  useEffect(() => {
    if(!showPreloader){
      setLoading(true);
    }
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 5050);

    return () => clearTimeout(timeoutId);
  }, [location]);

  return (
    <>
    {showPreloader && <Preloader />}
    {loading && <Loader/>}
      {!showPreloader && !loading && showNavbarAndFooter && <Navbar />}
      {!showPreloader && !loading && (
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
        <Route path="f" element={<FrontPagePosts/>}/>
        <Route path="t" element={<TeamManagement/>}/>
        <Route path="l" element={<LogoManagement/>}/>
      </Routes>
      )}
      {!showPreloader && !loading && showNavbarAndFooter && <Footer />}
      <Toaster />
    </>
  );
}

export default App;
