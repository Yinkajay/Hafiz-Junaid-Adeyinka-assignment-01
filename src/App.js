import './App.css';
import { Route, NavLink, Routes } from 'react-router-dom';
import Home from './components/Pages/Home';
import Navbar from './components/UI/Navbar';
import Register from './components/Pages/Register';
import Login from './components/Pages/Login';
import Calculator from './components/Pages/Calculator';



// 


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Register' element={<Register/>}/>
        <Route path='/Calculator' element={<Calculator/>}/>
        <Route path='/Login' element={<Login/>}/>      
      </Routes>
    </>
  );
}
/* <Navbar/>
<Header name={"Yinka's Webpage"}/> */

export default App;