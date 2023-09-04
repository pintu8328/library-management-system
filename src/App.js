
import './App.css';
import Home from './pages/Home';
 import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from './components/Navbar';
 import Login from './pages/Login';

function App() {
  return (
    <BrowserRouter>
    <>
      <Navbar/>
      <Routes>  
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>  
    </>
    </BrowserRouter>
     
  );
}

export default App;
