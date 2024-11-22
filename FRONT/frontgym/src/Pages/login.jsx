import React, {useEffect} from 'react';
import BackSingInUp from '../components/BackSingInUp/BackSingInUp';
import CustomTextField from '../components/CustomTextField/CustomTextField';
import PasswordField from '../components/PasswordField/PasswordField';
import ColorButton from '../components/ColorButton/ColorButton';
import {  Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Grid, FormControl, Container, Typography, InputLabel } from '@mui/material';
import { useState } from 'react';
//import md5 from 'md5';
import * as jwt_decode from 'jwt-decode';
import Swal from 'sweetalert2'

//const url = import.meta.env.VITE_API_CONSUME


export default function SingIn() {
  const navigate = useNavigate()
  const [leyenda, setLeyenda] = useState("Aunque nuestra visión hacia adelante es muy corta, podemos darnos cuenta de que hay mucho por hacer.")

  const Formulario = () => {
    const handleSubmit = async(e) =>{
      e.preventDefault();
      const carnet = e.target.carnet.value;
      // un md5 cuenta con 32 caracteres
      const password = md5(e.target.password.value);
      console.log(password)
      try {
        const response = await fetch(`${url}/login`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            carnet: carnet,
            password: password
          })
        });
  
        const data = await response.json();
        if (response.ok) {
          //Se obtiene la clave secreta para decodificar el token la cual se guarda en un archivo .env.local
          const keyjwt = import.meta.env.VITE_JWT_KEY_SECRET_TOKEN
          //Se decodifica el token para obtener los datos del usuario
          const tokendeco = jwt_decode.jwtDecode(data.token, keyjwt)
          //Se guarda el token en el localstorage
          localStorage.setItem('idusuario', tokendeco.usuario.id)
          console.log(localStorage.getItem('idusuario'))
          localStorage.setItem('tipousuario', tokendeco.usuario.id_tipousuario)
          localStorage.setItem('infousuario', JSON.stringify(tokendeco.usuario))
          console.log(localStorage.getItem('infousuario'))
          Swal.fire({
            title: 'Inicio de sesion exitoso!',
            text: 'Se ha iniciado sesion correctamente',
            icon: 'success',
            confirmButtonText: 'Aceptar'
          })
          navigate('/home')
        } else {
          //console.error('Error:', data.error);
          Swal.fire({
            title: 'Error al iniciar sesion',
            text: `${data.error}`,
            icon: 'error',
            confirmButtonText: 'Aceptar'
          })
        }
      } catch (error) {
        //console.error('Error:', error);
        console.log('Error:', error);
      }
    }
    useEffect(() => {
      localStorage.setItem('tipousuario', 0) //Se inicializa el tipo de usuario en 0 para indicar que no se ha iniciado sesion
    }, []);

    return (
      <form onSubmit={handleSubmit}>
      <FormControl sx={{width:"100%",alignItems:"center"}}>
         <CustomTextField name={"carnet"} label="Carnet" sx={{ width: '70%', marginTop: 2 }} />
         <PasswordField name={"password"} ll={'Contraseña'}/>
         <ColorButton mt={2} text={"Iniciar Sesion"} />
  
         <Typography variant="body2" sx={{ marginTop: 1 }}>
        ¿No tienes cuenta? <Link to={"/registrarse"} style={{ color: '#4169E1' }}> Regístrate</Link>
      </Typography>
      </FormControl>
      </form>
    )
  }



  return (
    <BackSingInUp Formulario={<Formulario />} Leyenda={leyenda} Leyenda2={"- Alan turing"} Hwall={"100vh"} />

  );
}