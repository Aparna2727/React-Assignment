
import './App.css';
import { MainPage } from './Components/MainPage';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/Home';
import {FavoritesPage} from './pages/Favorites';

function App() {
  return (
    <div className="App">
      {/* header */}
      <MainPage/>
      {/* Content text */}
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/favorites' element={<FavoritesPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
