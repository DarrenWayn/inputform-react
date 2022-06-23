import React, { useState } from 'react'

const FormInput = (props) => {
  const [focused, setFocused] = useState(false)
  const {label, onChange, errorMessage, id, ...inputProps} = props

  const focusHandler = (e) => {
    setFocused(true)
  }
  return (
    <div className='FormInput'>
        <label>{label}</label>
        <input
          {...inputProps} 
          onChange={onChange}
          onBlur={focusHandler}
          onFocus={
            () => inputProps.name==='confirmPassword' && setFocused(true)
          }
          focused={focused.toString()}
         /> 
         <span>{errorMessage}</span>
    </div> 
  ) 
}

export default FormInput