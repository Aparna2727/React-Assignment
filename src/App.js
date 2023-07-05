import "./App.css";
import {useState} from 'react'

function App() {

    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [grade, setGrade] = useState('');
    const [address, setAddress] = useState('');
    const [students, setStudents] = useState([]);
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      // Create a new student object with the form values
      const newStudent = {
        name: name,
        age: age,
        grade: grade,
        address: address
      };
  
      // Add the new student to the students array
      setStudents([...students, newStudent]);
  
      // Reset the form fields
      setName('');
      setAge('');
      setGrade('');
      setAddress('');
    };
  

  return (
    <div className="App">
          <h2>Student Form</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} /><br /><br />

        <label htmlFor="age">Age:</label>
        <input type="number" id="age" value={age} onChange={(e) => setAge(e.target.value)} /><br /><br />

        <label htmlFor="grade">Grade:</label>
        <input type="text" id="grade" value={grade} onChange={(e) => setGrade(e.target.value)} /><br /><br />

        <label htmlFor="address">Address:</label>
        <input type="text" id="address" value={address} onChange={(e) => setAddress(e.target.value)} /><br /><br />

        <button type="submit">Submit</button>
      </form>

      <br />

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Grade</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index}>
              <td>{student.name}</td>
              <td>{student.age}</td>
              <td>{student.grade}</td>
              <td>{student.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
