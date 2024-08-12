import { useState } from 'react'
import './App.css'
import Banner from './components/Banner'
import Enavbar from './components/Enavbar'
import Hero from './Hero'
import { Efooter } from './components/Efooter'
import Gallery from './components/Gallery'
import Categories from './components/Categories'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='w-[100vw] shadow-xl '>
      <Enavbar />
      </div>
      <Banner />
      <Hero />
      <Categories />
      <Gallery />
      <Efooter />
    </>
  )
}

export default App
