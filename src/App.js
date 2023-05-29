import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/Home';
import { AdminPage } from './pages/Admin';
import { StudentPage } from './pages/Student';
import { ExamPage } from './pages/Exam';
import { LoginPage } from './pages/Login';
import { Navbar } from './component/navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/admin' element={<AdminPage/>}/>
      <Route path='/student' element={<StudentPage/>}/>
      <Route path='/exam' element={<ExamPage/>}/>
      <Route path='/login' element={<LoginPage/>}/>
       
      </Routes>
     
    </div>
  );
}

export default App;
