import { useState } from 'react'
import './App.css'
import Main from './pages/Main'
import {
  Routes,
  Route,
  BrowserRouter
} from "react-router-dom";
import Confirmacion from './pages/Confirmacion'
function App() {
  const [count, setCount] = useState(0)

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/confirmar" element={<Confirmacion/>}></Route>
        </Routes>
      </BrowserRouter>
  )
}

export default App
