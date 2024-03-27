import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react'
import Subject from "./Subject";

function Router() {
  return (
   <>
   <Routes>
    <Route path ='allsubject/'element={<Subject/>}/>
   </Routes>
   </>
  )
}

export default Router
