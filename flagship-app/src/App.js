import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './App.css';
import Home from './components/Home';
import Create from './components/Create';
import Profile from './components/Profile';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
                <Routes>
                <Route path='/' element={<Home/>}>Home</Route>                            
                <Route path='/create' element={<Create/>}>Create</Route>                            
                <Route path='/profile' element={<Profile/>}>Profile</Route>                            
                </Routes>
            </BrowserRouter>
     
    </div>
  );
}

export default App;
