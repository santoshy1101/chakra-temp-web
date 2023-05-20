import React from 'react';
import { Box, ChakraProvider } from '@chakra-ui/react'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Carousel from './components/Carousel';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/SignIn';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Card from './components/Card';
import SingleCard from './components/SingleCard';

const App = () => {
  return (
    <BrowserRouter>
    <ChakraProvider>
    <Navbar/>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/signin" element={<SignIn/>}/>
    <Route path="/signup" element={<SignUp/>}/>
    <Route path="/card" element={<Card/>}/>
    <Route path="/singlecard" element={<SingleCard/>}/>
    <Route path="/card/:id" element={<SingleCard/>}/>
     
    </Routes>
    <Footer/>
    </ChakraProvider>
    </BrowserRouter>
  )
}

export default App