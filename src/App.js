import { useState } from 'react';
import FormInput from './components/FormInput';

function App() {
  const [values, setValues] = useState({
    fullname: '',
    email: '',
    birthday: '',
    password: '',
    confirmPassword: '',
  })

  const inputs = [
    {
      id: 1,
      name: 'fullname',
      type: 'text',
      placeholder: 'Full Name',
      label: 'Full name',
    },
    {
      id: 2,
      name: 'email',
      type: 'text',
      placeholder: 'Email',
      label: 'Email',
    },
    {
      id: 3,
      name: 'birthday',
      type: 'date',
      placeholder: 'Birthday',
      label: 'Birthday',
    },
    {
      id: 4,
      name: 'password',
      type: 'text',
      placeholder: 'Password',
      label: 'Password',
    },
    {
      id: 5,
      name: 'confirmPassword',
      type: 'text',
      placeholder: 'Confirm Password',
      label: 'Confirm Password',
    },
  ]
  const submithandler = (e) => {
    e.prevent.default()
  }

  const onChange = (e) => {
     setValues({...values, [e.target.name]: e.target.value})
  }

  console.log(values)
  return (
    <>
      <div className= 'container'>
        <div className="App">
          <form onSubmit={submithandler}> 
          <h1>Apply Now</h1>
              {inputs.map((input => {
                return (
                  <FormInput 
                    key={input.id} {...input} 
                    value={values[input.name]} 
                    onChange={onChange}
                  />
                )
              }))}
            <button>Apply</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
