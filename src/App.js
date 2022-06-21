import FormInput from './components/FormInput';
import { useState } from 'react'

function App() {
  const [username, setUsername] = useState('')
  console.log(username)
  return (
    <>
      <div className= 'container'>
        <div className="App">
          <form> 
            <FormInput placeholder="Username" setUsername={setUsername}/>
            <FormInput placeholder="Email" />
            <FormInput placeholder="Full Name" />
            <FormInput placeholder="Something Else" />
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
