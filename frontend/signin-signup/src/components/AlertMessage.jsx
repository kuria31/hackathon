import React from 'react'

const AlertMessage = ({ success, error }) => {
     return (
          <>
               <div className='fw-semibold'>
                    {success ? (<p className='text-success'>{success}</p>) : error ? (<p className="text-danger">{error}</p>) : null}
               </div>
          </>
     )
}

export default AlertMessage