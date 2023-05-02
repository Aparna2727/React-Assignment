
import './App.css';
import { Cards } from './Components/cardsFetching';
import { useState } from "react";

function App() {
  const [cardDetails, setCardDetails] = useState([]);

  async function handlUser() {
    let response = await fetch(" https://reqres.in/api/users/")
    .then((res) => res);
    let result = await response.json();
    setCardDetails(result.data);
  }

  return (
    
    <div className="App">
      {cardDetails.map((element, index) => {
        return <Cards ArrayDetails={element} key={cardDetails.id} />;
      })}
       
      <button onClick={handlUser}>Get Users</button>
    </div>
  );
}

export default App;
