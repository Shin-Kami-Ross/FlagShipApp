import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './App.css';
import Home from './components/Home';
import Create from './components/Create';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
                <Routes>
                <Route path='/' element={<Home/>}>home</Route>                            
                <Route path='/create' element={<Create/>}>home</Route>                            
                </Routes>
            </BrowserRouter>
     
    </div>
  );
}

export default App;
