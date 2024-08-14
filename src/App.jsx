import { useState } from 'react'
import './App.css'
import Enavbar from './components/Enavbar'
import { Outlet } from 'react-router-dom'
import { Efooter } from './components/Efooter'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='w-[100vw] shadow-xl '>
      <Enavbar />
      </div>
      <Outlet/>
      <Efooter />
    </>
  )
}

export default App
