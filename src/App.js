import { useState } from 'react';
import FormInput from './components/FormInput';

function App() {
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
      name: 'birthday',
      type: 'text',
      placeholder: 'Birthday',
      label: 'Birthday',
    },
    {
      id: 2,
      name: 'Username',
      type: 'text',
      placeholder: 'Username',
      label: 'Username',
    },
    {
      id: 2,
      name: 'Email',
      type: 'text',
      placeholder: 'Email',
      label: 'Email',
    },
    {
      id: 3,
      name: 'Fullname',
      type: 'text',
      placeholder: 'Full Name',
      label: 'Fulllname',
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
      name: 'ConfirmPassword',
      type: 'text',
      placeholder: 'Confirm Password',
      label: 'ConfirmPassword',
    },
  ]
  const submithandler = (e) => {
    e.prevent.default()
  }
  return (
    <>
      <div className= 'container'>
        <div className="App">
          <form onSubmit={submithandler}> 
              {inputs.map((input => {
                return <FormInput key={input.id} {...input} value={values[input.name]}/>
              }))}
            <button>Submit</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
