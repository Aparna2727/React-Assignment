
// import './App.css';
// import { HeroSection } from './Components/Section/hero';
import { Route, Routes } from 'react-router-dom';
import { Header } from './Components/molecules/Header';
import { Home } from './Components/Pages/Home';
import { About } from './Components/Pages/About';
import { Contact } from './Components/Pages/Contact';
import { Register } from './Components/Pages/Registration';
import { Login } from './Components/Pages/Login';

function App() {
  return (
    <div className="App">
     <Header/>
     {/* <HeroSection/> */}

     <Routes>
     <Route path='/' element = {<Home/>}/>
      <Route path='/about' element = {<About/>}/>
      <Route path='/contact' element = {<Contact/>}/>
      <Route path='/register' element = {<Register/>}/>
      <Route path='/login' element = {<Login/>}/>
     </Routes>
    </div>
  );
}

export default App;
