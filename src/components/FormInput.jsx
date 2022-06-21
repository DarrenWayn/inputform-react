import React from 'react'

const FormInput = (props) => {
  const submithandler = (e) => {
    e.prevent.default()
  }
  return (
    <div className='FormInput' onSubmit={submithandler}>
        <label> </label>
        <input 
            placeholder={props.placeholder} 
            onChange={(e) => props.setUsername(e.target.value)} 
         />
    </div> 
  ) 
}

export default FormInput