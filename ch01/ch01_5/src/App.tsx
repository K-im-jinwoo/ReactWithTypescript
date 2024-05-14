// app.tsx
import * as D from './data'
import React from 'react'
import './App.css'

function App() {
  return (
    <div className="App">
      <p>
        {D.randomName()}, {D.randomJobTitle()}, {D.randomDayMonthYear()}
      </p>
      <img src={D.randomAvatar()} alt="" height={'50'} />
      <img src={D.randomImage()} alt="" height={'300'} />
    </div>
  )
}

export default App
