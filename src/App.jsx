import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
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

const history = createBrowserHistory();

const App = () => {
  return (
    <>
      <Router history={history}>
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
          <Route path='/privacy-policy' element={<PrivacyP />} />
          <Route path='/disclaimer' element={<DisclaimerPart />} />
          <Route path='/termsandconditions' element={<Termsandconditions />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
