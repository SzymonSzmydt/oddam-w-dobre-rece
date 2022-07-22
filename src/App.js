import './App.css';
import {Home} from "./components/home/Home";
import {Route, Routes} from "react-router-dom";
import { Login } from './components/Login';

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/logowanie" element={<Login/>} />

    </Routes>
    </div>
  );
}

export default App;
