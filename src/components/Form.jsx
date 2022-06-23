import React, { useState } from 'react'
import FinishRegister from './FinishRegister';
import FormInput from './FormInput';

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const submitForm = () => {
    setIsSubmitted(true);
  }
  return (
    <>
        {!isSubmitted ? (
            <FormInput submitForm={submitForm} />
        ) : (
            <FinishRegister />
        )}
    </>
  )
}

export default Form