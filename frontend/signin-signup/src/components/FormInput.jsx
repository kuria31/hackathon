import React from 'react'

const FormInput = ({ label, type, id, placeholder, onChange }) => {
     return (
          <>
               <div className="mb-3">
                    <label htmlFor={id} className="form-label fw-semibold">{label}</label>
                    <input type={type} className="form-control" id={id} placeholder={placeholder}
                    onChange={onChange} autoComplete='true'/>
               </div>
          </>


     )
}

export default FormInput