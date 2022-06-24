import React from 'react'

const FormSuccess = ({ values, inputs }) => {
  return (
    <div className='formSuccess'>
        <h1>Thank you for Sign up, {values.username}</h1>
    </div> 
  )
}

export default FormSuccess