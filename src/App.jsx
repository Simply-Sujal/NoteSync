import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Resources from './Pages/Resources';
import VidResources from './Pages/VidResources';
import About from './Pages/About';
import ContactUs from './Pages/ContactUs';
import Header from './Components/Header';
import CourseStructure from './VideoComponent/CourseStructure';
import PrivacyP from './Pages/PrivacyP';
import DisclaimerPart from './Pages/DisclaimerPart';
import Termsandconditions from './Pages/Termsandconditions';
import PYQHome from './PYQ/PYQHome';
import PYQ from './Pages/PYQ';


const App = () => {
  return (
    <>
      <Router >
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/resources' element={<Resources />} />
          <Route path='/resource' element={<Resources />} />
          <Route exact path='/video' element={<VidResources />}>
          </Route>
          <Route path="/:coursename" element={<CourseStructure />}></Route>
          <Route path='/about' element={<About />} />
          <Route path='/contact-us' element={<ContactUs />} />
          <Route path='/pyq' element={<PYQ />} />
          {/* <Route path='/pyq' element={<PYQ />} /> */}
          <Route path='/privacy-policy' element={<PrivacyP />} />
          <Route path='/disclaimer' element={<DisclaimerPart />} />
          <Route path='/termsandconditions' element={<Termsandconditions />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
