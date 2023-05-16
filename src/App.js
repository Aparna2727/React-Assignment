
import './App.css';
import {useState} from 'react'


function App() {

  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState('');

  function handleDeleteUser(index){
    const updatedUsers = [...users];
    updatedUsers.splice(index, 1);
    setUsers(updatedUsers);
  };

  function  handleAddUser(){
    if (newUser.trim() !== '') {
      setUsers([...users, newUser]);
      setNewUser('');
    }
  };

  return (
    <div className='App'>
      <h2>Add User's</h2>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            {user}{' '}
            <button className='Delete-btn'  onClick={() => handleDeleteUser(index)}>Delete</button>
          </li>
        ))}
      </ul>
      <input type="text" value={newUser} onChange={(event)=>setNewUser(event.target.value)} placeholder="Add new user"/>
      <button className='Add-btn' onClick={handleAddUser}>Add</button>
    </div>
  );
}

export default App;
