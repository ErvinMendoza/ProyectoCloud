import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Container, Typography } from '@mui/material';

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
  };*/

  return (
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
  );
};

export default Home;
