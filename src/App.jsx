import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./Pages/Home"
import Shop from "./Pages/Shop"
import About from "./Pages/About";
import './App.css'


function App() {
 
  return (
   
    <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/shop' element={<Shop/> }/>
     <Route path='/about' element={<About/> }/>
    </Routes>
  
  )
}

export default App
