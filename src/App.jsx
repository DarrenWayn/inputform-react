import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import FinishRegister from './components/FinishRegister';
import FormInput from './components/FormInput';

function App() {
  const navigate = useNavigate();
  // const [loading, isLoading] = useState(false)
  const [values, setValues] = useState({
    username: '',
    email: '',
    birthday: '',
    password: '',
    confirmPassword: '',
  })

  const inputs = [
    {
      id: 1,
      name: 'username',
      type: 'text',
      placeholder: 'Username',
      errorMessage: "Username should be 3-16 characters and shouldn't include any special character!",
      label: 'Username',
      pattern: '^[A-Za-z0-9]{3,16}',
      required: true,
    },
    {
      id: 2,
      name: 'email',
      type: 'email',
      placeholder: 'Email',
      errorMessage: 'It should be valid email address ',
      label: 'Email',
      required: true,
    },
    {
      id: 3,
      name: 'birthday',
      type: 'date',
      placeholder: 'Birthday',
      errorMessage: '',
      label: 'Birthday',
    },
    {
      id: 4,
      name: 'password',
      type: 'password',
      placeholder: 'Password',
      errorMessage: 'Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character',
      label: 'Password',
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Passwords don't match!",
      label: "Confirm Password",
      pattern: values.password,
      required: true,
    },
  ]
  const submithandler = (e) => {
    e.prevent.default()

    const checkLogin = true
        if (checkLogin) {
            navigate('/finishregister')
        }
  }

  const onChange = (e) => {
     setValues({...values, [e.target.name]: e.target.value})
  }

  console.log(values)
  return (
    <>
      <Routes>
          <Route path="/finishregister" element={<FinishRegister />} />
      </Routes>
      <div className= 'container'>
        <div className="App">
          <form onSubmit={submithandler}> 
          <h1>Register</h1>
              {inputs.map((input => {
                return (
                  <FormInput 
                    key={input.id} {...input} 
                    value={values[input.name]} 
                    onChange={onChange}
                  />
                )
              }))}
            <button
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
