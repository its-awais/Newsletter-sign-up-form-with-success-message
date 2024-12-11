import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Newsletter from './Component/Nesletter.jsx/Newsletter'
import { createBrowserRouter,Route,createRoutesFromElements,RouterProvider, Routes } from 'react-router-dom';
import Thanks from './Component/ThanksForSubscribing/Thanks'
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
      <Route path="/" element={<Newsletter />}/>
      <Route path='/newsletter' element={<Newsletter/>}/>
      <Route path='/thankYou' element={<Thanks/>}/>
      </>
    )
  )

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
