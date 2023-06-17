import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home';
import Us from './Pages/Us';
import Gyms from './Pages/Gyms';
import Services from './Pages/Services';
import Account from './Pages/Account';
import SmartPG from './Pages/SubPages/SmartPowerGym';
import Routinas from './Pages/SubPages/Routinas';
import Store from './Pages/SubPages/Store';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Nosotros' element={<Us/>}/>
      <Route path='/Gimnasios' element={<Gyms/>}/>
      <Route path='/Servicios' element={<Services/>}/>
      <Route path='/Cuenta' element={<Account/>}/>
      //SubPage
      <Route path='/Smart_Power_Gym' element={<SmartPG/>}/>
      <Route path='/Rutinas' element={<Routinas/>}/>
      <Route path='/Tienda' element={<Store/>}/>
    </Routes>
  );
}

export default App;
