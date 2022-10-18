import React from 'react'
import { Link } from 'react-router-dom'

function Password() {
  return (
    <div>Password <Link to={"/login"} >Login</Link></div>
  )
}

export default Password