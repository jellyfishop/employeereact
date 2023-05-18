import './App.css';
import Admin from './components/Admin';
import Add from './components/Add';
import Edit from './components/Edit';
import View from './components/View';
import { Route,Routes } from 'react-router-dom';
import Pagenotfound from './components/Pagenotfound';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Admin></Admin>}></Route>
        <Route path='add' element={<Add></Add>}></Route>
        <Route path='edit/:id' element={<Edit></Edit>}></Route>
        <Route path='view/:id' element={<View></View>}></Route>
        <Route path={'*'} element={<Pagenotfound></Pagenotfound>}></Route>


      </Routes>
    </div>
  )
}

export default App