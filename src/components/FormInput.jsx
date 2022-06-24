// import React from 'react'
// import useForm from './useForm'

// const FormInput = ({ submitForm }) => {
//   const {
//     submithandler,
//     inputs,
//     values,
//     focused,
//     focusHandler,
//     setFocused,
//     onChange,
//   } = useForm({submitForm})

//   return (
//     <form onSubmit={submithandler}> 
//         <h1>Register</h1>
//             {inputs.map((input => {
//               return (
//                 <div className='FormInput'>
//                 <label>{input.label}</label>
//                 <input
//                   key={input.id}
//                   {...input}
//                   value={values[input.name]}
//                   onChange={onChange}
//                   onBlur={focusHandler}
//                   onFocus={() =>
//                     input.name === input.confirmPassword && setFocused(true)
//                   }
//                   focused={focused.toString()} 
//                 /> 
//                 <span>{input.errorMessage}</span>
//                 </div> 
//               )
//             }))}
//           <button
//             type="submit"
//           >
//             Submit
//           </button>
//         </form>
//   ) 
// }

// export default FormInput

import React, { useState } from 'react'

const FormInput = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, id, ...inputProps } = props;

  const handleFocus = (e) => {
    setFocused(true);
  };
  return (
    <div className="formInput">
      <label>{label}</label>
      <input
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={() =>
          inputProps.name === "confirmPassword" && setFocused(true)
        }
        focused={focused.toString()}
      />
      <span>{errorMessage}</span>
    </div>
  )
}

export default FormInput