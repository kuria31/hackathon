import React from 'react'
import { Link } from 'react-router-dom';

const MyLink = ({linkTo, label}) => {
     return (
          <Link to={linkTo} className='link-dark fw-semibold text-decoration-none'>{label}</Link>
     )
}

export default MyLink