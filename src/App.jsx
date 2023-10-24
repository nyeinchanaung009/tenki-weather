import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home.jsx"
import Forecast from "./pages/Forecast.jsx"
import NotFound from "./pages/NotFound.jsx"

import Context from './Context.js'
import { useState } from "react"

function App() {
  const [locationBox,setLocationBox] = useState(false);
  const [addLocationModal,setAddLocationModal] = useState(false);
  const [locations,setLocations] = useState(localStorage.getItem('mylocations') ? JSON.parse(localStorage.getItem('mylocations')) : ['Yangon','Tokyo']);
  const [currentCity,setCurrentCity] = useState(localStorage.getItem('mycurcity') ? localStorage.getItem('mycurcity') : 'yangon');
  const [isMph,setIsMph] = useState(true);
  const [isC,setIsC] = useState(true);
  const [loading,setLoading] = useState(false);
  const [isError,SetIsError] = useState(false);

  const [data,setData] = useState();

  return (
    <>
      <Router>
          <Context.Provider value={{locations,setLocations,currentCity,setCurrentCity,locationBox,setLocationBox,addLocationModal,setAddLocationModal,isMph,setIsMph,isC,setIsC,data,setData,loading,setLoading,isError,SetIsError}}>
            <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="forecast/:param" element={<Forecast />}/>
              <Route path="*" element={<NotFound />}/>
            </Routes>
          </Context.Provider>
      </Router>
    </>
  )
}

export default App