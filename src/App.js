import './App.css';
import App1AppBar from './AppBar.js';
import { Routes, Route, Link } from "react-router-dom";
import { DashBoard } from './DashBoard';
import { Home } from './Home';
import { Components } from './Components';
import { Utilities } from './Utilities';



function App() {

  return (
    <div className="App">
    <App1AppBar/>
    <div className="App1">
      <nav>
      <ul>
        <li>
        <Link to="/">
          Home
        </Link>
        </li>
        <li>
        <Link to="/dashboard">DashBoard</Link>
        </li>
        <li>
        <Link to="/components">Components</Link>
        </li>
        <li>
        <Link to="/utilities">Utilities</Link>
        </li>
      </ul>
        </nav>
      {/* <DashBoard/> */}
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/dashboard" element={<DashBoard/>}/>
      <Route path="/components" element={<Components/>}/>
      <Route path="/utilities" element={<Utilities/>}/>
    </Routes>
    </div>
    
    </div>
  );
}

export default App;
