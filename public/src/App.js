import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Register from './pages/Register'
import Login from './pages/Login'; // Adjust the path as necessary
import Chat from './pages/Chat';   // Adjust the path as necessary
export default function App() {
  return <BrowserRouter>
  <Routes>
    <Route path="/register" element={<Register />}/> 
    <Route path="/login" element={<Login />}/> 
    <Route path="/" element={<Chat />}/> 
  </Routes>
  </BrowserRouter>
}
