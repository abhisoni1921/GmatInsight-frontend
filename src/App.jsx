import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home.jsx';
import LoginPage from './components/login.jsx';
import GmatCoursesSection from './pages/gmat.jsx';


import AboutPage from './pages/about.jsx';
function App() {
  

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/gmat' element={<GmatCoursesSection/>}/>
      <Route path='/about' element={<AboutPage/>}/>
    </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
