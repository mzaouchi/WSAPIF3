import './App.css';
import ListUsers from './Components/ListUsers';
import {Routes,Route} from 'react-router-dom'
import Home from './Components/Home';
import NavUser from './Components/NavUser';
import Description from './Components/Description';
import { useState } from 'react';
import PrivateRoute from './Components/PrivateRoute';

function App() {
  const [auth,setAuth] = useState(false)
  return (
    <div>
        {/* <h1>WS API</h1>
        <ListUsers/> */}
        <NavUser auth={auth} setAuth={setAuth}/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/Users' element={<PrivateRoute auth={auth}><ListUsers/></PrivateRoute>}/>
            <Route path='/Users/:id' element={<PrivateRoute auth={auth}><Description/></PrivateRoute>}/>
        </Routes>
    </div>
  );
}

export default App;
