import React from 'react'

const FormInput = ({ label, type, id, placeholder, onChange }) => {
     return (
          <>
               <div className="mb-3">
                    <label htmlFor={id} className="form-label">{label}</label>
                    <input type={type} className="form-control" id={id} aria-describedby="emailHelp" placeholder={placeholder}
                    onChange={onChange} autoComplete='true'/>
               </div>
          </>


     )
}

export default FormInput