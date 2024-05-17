
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import "./Components/header/Header.css"
import "./Components/snipped/Snipped.css"
import "./Pages/home/Home.css"
import "./Components/Components.css"
import "./Components/Footer/Footer.css"
// import "./Pages/home/sections/FeaturedListining/Slides.css"

import AnimatedPath from './AnimatedPath';
import ScrollToTop from "./Components/ScrollToTop"
function App() {
  return (
    <div className="App">
   <BrowserRouter>
   <ScrollToTop/>
     <AnimatedPath/>
   </BrowserRouter>
    </div>
  );
}

export default App;
