import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {Route,BrowserRouter,Routes,HashRouter} from 'react-router-dom';
import SingIn from './Pages/login';
import './App.css'

function App() {
  const [count, setCount] = useState(0)
//route...

  return (
    <HashRouter>
      <Routes>
        <Route exact path="/" element={<SingIn/>} />
        {/*<Route path="/Home" element={<Home/>} />
        <Route path="/Registrarse" element={<SingUp/>} />
        <Route path="/ilibros" element={<InventarioLibros/>} />
        <Route path="/imuebles" element={<InventarioMuebles/>} />
        <Route path="/plibros" element={<PrestamosLibros/>} />
        <Route path="/pmuebles" element={<PrestamosMuebles/>} />
        <Route path="/solicitudes" element={<Solicitudes/>} />
        <Route path="/administrar" element={<Administrar/>} />*/}
      </Routes>
    </HashRouter>
  )
}

export default App
