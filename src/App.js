import "./App.css";
import { ScrollingCards } from "./Components/ScrollingCards/ScrollingCards";

function App() {
  return (
    <div className="App">
      <h1>Know your mentors</h1>
      <p>
        Work with a mentor (senior data scientists from top companies) who
        closely looks at your progress, gives you personalized feedback and
        helps you fill gaps in your knowledge.
      </p>
      <ScrollingCards />
    </div>
  );
}

export default App;
