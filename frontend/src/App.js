
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './components/Login.js'
import Users from './components/Users';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/all" element={<Users/>} />
        <Route path="/" element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
