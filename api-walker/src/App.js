import Select from './Components/Select';
import People from './Components/People';
import {Router} from "@reach/router"
import './App.css';
import Planets from './Components/Planet';

function App() {
  return (
    <div className="App">
      <h1>API Walker</h1>
      <Select />
      <Router>
      <People path="/people/:id" />
      <Planets path="/planets/:id" />
      </Router>
    </div>
  );
}

export default App;
