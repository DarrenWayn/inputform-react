import React from 'react'
import FormSuccess from './FormSuccess';
import Input from './Input';
import useForm from './useForm';

const Form = () => {
  const {
    isSubmitted,
    handleSubmit,
    values,
    inputs,
    onChange
  } = useForm()

  return (
    <>
        {!isSubmitted ? (
            <Input 
              handleSubmit={handleSubmit}
              values={values}
              inputs={inputs}
              onChange={onChange}
            />
        ) : (
            <FormSuccess 
              values={values}
              inputs={inputs}
            />
        )}
    </>
  )
}

export default Form