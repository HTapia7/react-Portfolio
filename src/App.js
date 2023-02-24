import './App.css';
import { BrowserRouter as Router , Routes, Route } from "react-router-dom" 
import Navbar from "./components/Navbar";
import Projects from "./pages/Projects"
import About from "./pages/About"
import Resume from "./pages/Resume"
import Footer from "./components/Footer";
import ProjectDisplay from "./pages/ProjectDisplay"

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<About />}/>
          <Route path='/projects' element={<Projects />}/>
          <Route path='/project/:id' element={<ProjectDisplay />}/>
          <Route path='/Resume' element={<Resume />}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
