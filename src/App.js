import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Teams from './components/Teams.js';
import App1 from './App1.js';
import Home from './components/Home.jsx';
function App() {
  return (
    
        <div className="App">
      <Router>
        <Routes>
        <Route path="/" element={<App1 />} />
          <Route path="/home" element={<App1 />}/>
          <Route path="/teams" element={<Teams />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;


