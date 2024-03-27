import Navbar from "./Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Studentlist from "./Studentlist";
import Router from "./Router";

export default function App() {
  return (
    <> 
    <BrowserRouter>
    <Routes>
    <Route path='/*'element={<Studentlist/>}/>
    <Route path="/main/*"element={<Router/>}/>
    </Routes>
    </BrowserRouter>
    
    </>
  )
}