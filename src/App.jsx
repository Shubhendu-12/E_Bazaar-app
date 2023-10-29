import React from 'react'
import './App.css'
import { BrowserRouter as Router,Routes, Route}from 'react-router-dom'; 
import Navbar from './components/Navbar';
import Home from './Home';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import ErrorPage from './components/ErrorPage';
import SingleProduct from './components/SingleProduct';
import AboutUs from './components/AboutUs';


function App() {
 

  return (
    <>
      <Router>
    <Navbar/>
    <Routes>
     <Route path ="/" element={<Home/>}/>
     <Route path='contactUs' element={<ContactUs/>}/>
     <Route path='*' element={<ErrorPage/>}/>
     <Route path='about' element={<AboutUs/>}/>
     <Route path="/singleproduct/:id" element={<SingleProduct/>} />
    </Routes>
    <Footer/>
    </Router>
    </>
  )
}

export default App
