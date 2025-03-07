import React from 'react'

const Container = ({ children}) => {
  return (
    <div className='container mt-5'>
      <div className="row justify-content-center glass-card">
        <div className="col-md-6 ">
          <div className="card p-5 shadow-md rounded-5 bg-transparent">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Container