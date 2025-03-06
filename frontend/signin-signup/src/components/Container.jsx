import React from 'react'

const Container = ({ children }) => {
  return (
    <div className='container mt-5'>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card p-5 shadow-lg rounded-5 ">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Container