import React from 'react'
import useForm from './useForm'

const FormInput = ({ submitForm }) => {
  const {
    submithandler,
    inputs,
    values,
    focused,
    focusHandler,
    setFocused,
    onChange,
  } = useForm({submitForm})

  return (
    <form onSubmit={submithandler}> 
        <h1>Register</h1>
            {inputs.map((input => {
              return (
                <div className='FormInput'>
                <label>{input.label}</label>
                <input
                  key={input.id}
                  {...input}
                  value={values[input.name]}
                  onChange={onChange}
                  onBlur={focusHandler}
                  onFocus={() =>
                    input.name === input.confirmPassword && setFocused(true)
                  }
                  focused={focused.toString()} 
                /> 
                <span>{input.errorMessage}</span>
                </div> 
              )
            }))}
          <button
            type="submit"
          >
            Submit
          </button>
        </form>
  ) 
}

export default FormInput