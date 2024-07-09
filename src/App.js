// import React, { useState, useEffect } from 'react';
// import Popup from '@components//Popup';
import { BrowserRouter } from 'react-router-dom';
import '@app/App.module.css';
import "@components/Components.module.css"

import AnimatedPath from '@app/AnimatedPath';
import ScrollToTop from "@components/ScrollToTop"
function App() {

  // const [showPopup, setShowPopup] = useState(false);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setShowPopup(true);
  //   }, 2000);

  //   return () => clearTimeout(timer); // Cleanup the timeout if the component unmounts
  // }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <AnimatedPath />
      </BrowserRouter>
      {/* {showPopup && <Popup onClose={() => setShowPopup(false)} />} */}
    </div>
  );
}

export default App;


