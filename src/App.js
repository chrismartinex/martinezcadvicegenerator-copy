import './App.css';
import GetDataAdvice from './Services/DataServices';
import Generator from './Components/GenaratorComponent';

function App() {
  return (
    <div className="App">
         <Generator/>
    </div>
    
  );
}

export default App;

// Peer Review 03/14/23
// Jessie Lamzon
// Peer Review: Advice Generator
// I like how you used useeffect to call the fetch when page loads already, also having the divider set in a fixed position too.  I would say the font sizes need updating and hover effect is also missing. Other than that the fetch and everything works great.