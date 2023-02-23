import './App.css';
import { BrowserRouter as Router , Routes, Route } from "react-router-dom" 
import Navbar from "./components/Navbar";
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import About from "./pages/About"
import Resume from "./pages/Resume"

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/projects' element={<Projects />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/Resume' element={<Resume />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
