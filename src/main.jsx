import React from 'react'
import './style/style.css'
import Left from './components/left/left'
import Middle from './components/middle/middle'
import Right from './components/right/right'

const Main = () => {
  return (
    <div className='container'>
        <Left/>
        <Middle/>
        <Right/>
    </div>
  )
}

export default Main