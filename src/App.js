import './App.css';
import {Home} from "./components/home/Home";
import {Route, Routes} from "react-router-dom";
import { Login } from './components/Login';
import { Rejestracja } from './components/Rejestracja';
import { Logout } from './components/Logout';

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/logowanie" element={<Login/>} />
            <Route path="/rejestracja" element={<Rejestracja/>} />
            <Route path="/wylogowano" element={<Logout/>} />
        </Routes>
    </div>
  );
}

export default App;
