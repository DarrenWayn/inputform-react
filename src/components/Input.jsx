import React from 'react'
import FormInput from './FormInput';

const Input = ({ handleSubmit, values, onChange, inputs }) => {
      return (
        <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        {inputs.map((input) => (
            <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
            />
        ))}
        <button type='submit'>Submit</button>
        </form>
      );
}

export default Input