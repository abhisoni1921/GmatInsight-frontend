import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home.jsx';
import LoginPage from './components/login.jsx';
function App() {
  

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<LoginPage/>}/>
    </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
