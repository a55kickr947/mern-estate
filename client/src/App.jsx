import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import About from './pages/About';
import Profile from './pages/Profile';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Home from './pages/Home';
import Header from './components/Header';
function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
    <Route   path='/' element={<Home/>}/>
    <Route   path='/about' element={<About/>}/>
    <Route   path='/profile' element={<Profile/>}/>
    <Route   path='/sign-up' element={<SignUp/>}/>
    <Route   path='/sign-in' element={<SignIn/>}/>
    
    
    </Routes>
    
    
    </BrowserRouter>
    
    )
}

export default App
