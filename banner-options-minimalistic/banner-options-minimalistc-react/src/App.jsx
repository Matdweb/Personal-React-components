import React from 'react'
import Title from './components/Title'
import Options from './components/Options'
import './App.css'
import './components/components_styles/Options-styles.css'
import './components/components_styles/title-styles.css'

function App() {
  return (
  <div className='father'>
      <Title />
    <div className='father-options'>
      <Options />
    </div>
  </div>
  )
}

export default App