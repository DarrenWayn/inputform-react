import React from 'react'

const FormInput = (props) => {
  return (
    <div className='FormInput'>
        <input
            placeholder={props.placeholder} 
            name={props.name}
         /> 
    </div> 
  ) 
}

export default FormInput