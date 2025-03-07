import React from 'react'

const MyButton = ({type, name}) => {
  return (
     <button type={type} className="btn btn-dark d-flex flex-column w-100">{name}</button>
  )
}

export default MyButton