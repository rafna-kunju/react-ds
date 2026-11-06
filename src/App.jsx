import './App.css'
import Home from './pages/Home';
import Login from './pages/Login';
import Movies from './pages/movies';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/home'  element={<Home/>}></Route>
        <Route path='/movies' element={<Movies/>}></Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
