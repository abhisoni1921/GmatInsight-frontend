import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home.jsx';
import LoginPage from './components/login.jsx';
import GmatCoursesSection from './pages/gmat.jsx';


import AboutPage from './pages/about.jsx';
import ContactUs from './pages/contact.jsx';
import TestimonialsPage from './pages/testimonials.jsx';
import GreCoursesSection from './pages/gre.jsx';
import TestimonialPage from './components/oneTestimonial.jsx';
import GMATCoursePage from './pages/gmat1.jsx';
import GMATFocusFormat from './pages/knowgmat.jsx';

function App() {
  

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/gmat' element={<GmatCoursesSection/>}/>
      <Route path='/gre' element={<GreCoursesSection/>}/>
      <Route path='/about' element={<AboutPage/>}/>
      <Route path='/contact' element={<ContactUs/>}/>
      <Route path='/testimonials' element={<TestimonialsPage/>}/>
      <Route path='/user1' element={<TestimonialPage/>}/>
      <Route path='/gmatcourse1' element={<GMATCoursePage/>}/>
      <Route path='/knowgmat' element={<GMATFocusFormat/>}/>
      
    </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
