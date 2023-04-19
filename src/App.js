import logo from './logo.svg';
import './App.css';
import { ReactLogo } from './Components/ReactLogo';
import { ReactBenifits } from './Components/ReactBenifits';
import { Button } from './Components/Button';

function App() {
  return (
    <div className="App">
       <ReactLogo/>
       <ReactBenifits/>
       <Button/>
    </div>
  );
}
export default App;
