import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Button, Container, Typography } from '@mui/material';
import usaclogo from '../components/BackSingInUp/image/usaclogo.png';
const Home = () => {
  const navigate = useNavigate();

  // Función para cerrar sesión
  const handleLogout = () => {
    localStorage.clear(); // Limpia todo el localStorage
    navigate('/'); // Redirige al login
  };

  // Función para navegar a editar perfil
 /* const handleEditProfile = () => {
    navigate('/editar-perfil'); // Cambia esta ruta según la configuración de tus rutas
  };
  
  
  <Container sx={{ textAlign: 'center', marginTop: '5rem' }}>
        <Typography variant="h4" gutterBottom>
            Bienvenido, {localStorage.getItem('usuario') || 'Usuario'}
        </Typography>
        <Typography variant="body1" gutterBottom>
            Selecciona una opción a continuación:
        </Typography>
        <Button 
            variant="contained" 
            color="secondary" 
            sx={{ margin: '1rem' }} 
            onClick={handleLogout}>
            Cerrar Sesión
        </Button>
        </Container>

         <div>
                <nav classNameName="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                <div classNameName="container-fluid">
                <a classNameName="navbar-brand" >Tu Aplicación</a>
                <button classNameName="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span classNameName="navbar-toggler-icon"></span>
                </button>
                <div classNameName="collapse navbar-collapse" id="navbarNav">
                    <ul classNameName="navbar-nav ml-auto">
                    <li classNameName="nav-item">
                    <Button 
                        variant="contained" 
                        color="secondary" 
                        sx={{ margin: '1rem' }} 
                        onClick={handleLogout}>
                        Cerrar Sesión
                    </Button>
                    </li>
                    <li classNameName="nav-item">
                        <Button 
                            variant="contained" 
                            color="secondary" 
                            sx={{ margin: '1rem' }} 
                            onClick={handleLogout}>
                            Editar Perfil
                        </Button>
                    </li>
                    
                    </ul>
                </div>
                </div>
            </nav>
          </div>
  */

        return (
            <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
              <div className="container-fluid">
              <a class="navbar-brand">
                <img src = {usaclogo} alt="Logo" width="110" height="44" class="d-inline-block align-text-top"></img>
                </a>
                <a className="navbar-brand" >Bienvenido ! {localStorage.getItem('usuario') || 'Usuario'}</a>
                <button 
                  className="navbar-toggler" 
                  type="button" 
                  data-bs-toggle="offcanvas" 
                  data-bs-target="#offcanvasNavbar" 
                  aria-controls="offcanvasNavbar" 
                  aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
      
                <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                  <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Menú</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                  </div>
                  <div className="offcanvas-body">
                    <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                      <li className="nav-item dropdown">
                        <a 
                          className="nav-link dropdown-toggle" 
                          href="#" 
                          role="button" 
                          data-bs-toggle="dropdown" 
                          aria-expanded="false">
                          Opciones
                        </a>
                        <ul className="dropdown-menu">
                          <li><a className="dropdown-item" href="#">Action</a></li>
                          <li><a className="dropdown-item" href="#">Another action</a></li>
                          <li><hr className="dropdown-divider" /></li>
                          <li>{/* Botón de Cerrar sesión */}
                            <button className="btn btn-danger" onClick={handleLogout}>
                            Cerrar sesión
                            </button>
                        </li>
                        </ul>
                      </li>
                    </ul>
      
                    
                  </div>
                </div>
              </div>
            </nav>
      
            <div className="container mt-5 pt-5">
              <h1>Bienvenido al Home</h1>
            </div>
          </div>
          );
};

export default Home;
