import './App.css';
import { HashRouter as Router , Routes, Route } from "react-router-dom" 
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Projects from "./pages/Projects"
import About from "./pages/About"
import Resume from "./pages/Resume"
import Contact from "./pages/Contact"
import ProjectDisplay from './pages/ProjectDisplay';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<About />}/>
          <Route path='/projects' element={<Projects />}/>
          <Route path='/projects/:id' element={<ProjectDisplay />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/Resume' element={<Resume />}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
