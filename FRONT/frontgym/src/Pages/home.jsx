import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Button, Container, Typography } from '@mui/material';
import usaclogo from '../components/BackSingInUp/image/usaclogo.png';
import GraficaLine1 from '../components/Graficas/GraficaLine1';
import GraficaBar from '../components/Graficas/GraficaBar';

const Home = () => {

  const url = 'http://localhost:5000' //import.meta.env.VITE_API_CONSUME
  const [labels, setLabels] = useState([]);
  const [datasetData, setDatasetData] = useState([]);
  const [labelsC, setLabelsC] = useState([]);
  const [datasetDataC, setDatasetDataC] = useState([]);

  const navigate = useNavigate();
  const userId = localStorage.getItem('id');

  // Función para cerrar sesión
  const handleLogout = () => {
    localStorage.clear(); // Limpia todo el localStorage
    navigate('/'); // Redirige al login
  };

  const fetchFechasVueltas = async () => {
      try {
          const response = await fetch(`${url}/registros/por-fecha`);//fetch(`${url}/login`
          if (!response.ok) {
              throw new Error('Error al obtener los datos');
          }
          const data = await response.json();
          const fechas = data.map(item => item.fecha);
          const vueltas = data.map(item => item.total_vueltas);
          setLabels(fechas);
          setDatasetData(vueltas);
      } catch (error) {
          console.error('Error al obtener datos:', error);
      }
    };

    useEffect(() => {
      fetchFechasVueltas();
  }, []);


    // Función para obtener las calorías quemadas por el usuario
    const fetchCalorias = async () => {
      try {
        const response = await fetch(`${url}/calorias/${userId}`);
        if (!response.ok) {
          throw new Error('Error al obtener las calorías');
        }
        const data = await response.json();
        
        if (data.message) {
          // Si no se encontraron registros, manejarlo
          console.error(data.message);
          return;
        }
        
        const calorias = data.calorias_quemadas;
        setLabelsC([localStorage.getItem('usuario') || 'Usuario']); // Solo mostrar un label con el nombre de usuario
        setDatasetDataC([calorias]); // Mostrar las calorías como el dataset
      } catch (error) {
        console.error('Error al obtener calorías:', error);
      }
    };


  useEffect(() => {
    fetchFechasVueltas();
    fetchCalorias();
}, []);

        return (
            <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
              <div className="container-fluid">
              <a className="navbar-brand">
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
              <h1>Bienvenido a tu app GYM</h1>
            </div>
            <div>
            <GraficaLine1
                labels={labels}
                datasetData={datasetData}
                initialPointStyle="rect" // Estilo inicial de los puntos
              />

            </div>
            {/* Llamada a la gráfica de barras (GraficaBar) con datos de calorías */}
            <div>
              <GraficaBar
                labels={labelsC}
                datasets={[{
                  label: 'Calorías quemadas',
                  data: datasetDataC,
                  backgroundColor: 'rgba(75, 192, 192, 0.5)',
                  borderColor: 'rgba(75, 192, 192, 1)',
                  borderWidth: 1,
                  borderRadius: 5,
                  borderSkipped: false,
                }]}
              />
            </div>

          </div>
          );
};

export default Home;
