import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home';
import Us from './Pages/Us';
import Gyms from './Pages/Gyms';
import Services from './Pages/Services';
import SmartPG from './Pages/SubPages/SmartPowerGym';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Nosotros' element={<Us/>}/>
      <Route path='/Gimnasios' element={<Gyms/>}/>
      <Route path='/Servicios' element={<Services/>}/>
      //SubPage
      <Route path='/Smart_Power_Gym' element={<SmartPG/>}/>
    </Routes>
  );
}

export default App;
