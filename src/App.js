
import { BrowserRouter } from 'react-router-dom';
import '@app/App.css';
import "@components/Components.css"
// import "./Pages/home/sections/FeaturedListining/Slides.css"

import AnimatedPath from '@app/AnimatedPath';
import ScrollToTop from "@components/ScrollToTop"
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
