import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Team from "./components/Team";
import Project from "./components/Project";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/about" element={<About />}></Route>
        <Route exact path="/projects" element={<Projects />}></Route>
        <Route exact path="/project/:title" element={<Project />}></Route>
        <Route exact path="/team" element={<Team />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
