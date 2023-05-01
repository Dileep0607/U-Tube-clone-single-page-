import React from 'react'
import './Siderow.css'

const Siderow = ({selected,Icon,title}) => {
  return (
    <div className={`siderow ${selected && 'selected'}`}>
      <Icon className='icon' />
      <h2 className='title'>{title}</h2>
    </div>
  )
}

export default Siderow
