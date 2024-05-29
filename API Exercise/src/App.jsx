import { useState } from 'react'
import './App.css'
import Card from './components/card/Card'
import AnotherCard from './components/AnotherCard'

function App() {

  return (
    <div className='App'>
      <Card/>
      <AnotherCard />
    </div>
  )
}

export default App
