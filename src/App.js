import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopNav from './components/topNav';
import Home from "./components/home";
import About from './components/about';
// import Projects from './components/projects';
import Contact from './components/contact';
import Work from './components/work';


function App() {
  return (
    <Router basename='/workportfolio'>
      <TopNav/> 
      <div className='mt-0'> {/* mt-5 if nav bar is fixed='top' */}
        <Routes>
          <Route path="/" exact element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          {/* <Route path='/projects' element={<Projects/>}/> */}
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/workexp' element={<Work/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
