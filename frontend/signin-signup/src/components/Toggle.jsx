import React from 'react'
import { Link } from 'react-router-dom';

const Toggle = ({query, linkTo, typeButton, label}) => {
     return (
          <div className="mt-3 text-center">
               <p>{query}</p>
               <Link to={linkTo} type="button" className={typeButton}>{label}</Link>
          </div>
     )
}

export default Toggle