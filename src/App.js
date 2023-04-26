import './App.css';
import {useState} from 'react'
function App() {

  const [Name, setName] = useState(" ")
  const [NewName , setNewName] = useState(" ")

  function InputChange(event){
     setNewName(event.target.value)
  }

  function handleSubmit(){
       setName(NewName)
       setNewName("")

  }
  
  return (

    <>
    <div className="App">
    <h1 className='Enetr'>Enter Your Name Here</h1>
      <input  placeholder='Add your name...' value={NewName} onChange={InputChange}></input>
      <button onClick={handleSubmit}>Submit</button>
      <h1 className='Output'>Hi my name is: {Name}</h1>
    </div>
    </>
  );
}

export default App;
