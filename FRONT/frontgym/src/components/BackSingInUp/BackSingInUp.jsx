import React from 'react';
import { Container, Grid, Typography, Divider } from '@mui/material';
import fondo from './image/wallDashboard.jpg'
import usaclogo from './image/usaclogo.png'

export default function BackSingInUp({ Formulario, Leyenda,Leyenda2, Hwall }) {
  return (
    <Grid container 
    sx={{
      display: "flex",
      fontFamily: "Arial",
      backgroundImage: `url(${fondo})`, // Ruta de tu imagen
      backgroundRepeat: "no-repeat", // Repetir imagen
      backgroundSize: "cover", // Tamaño de la imagen
      height: Hwall,
      padding: 0,
     
      justifyContent: "center",
    }}>
      <Grid container sx={{
        marginTop: 5,
        maxWidth:"80%",
        marginBottom:2,
        borderRadius: 8, // Ajusta el valor según sea necesario
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // Ajusta el valor según sea necesario
        border: "1px solid #ccc", // Ajusta el valor según sea necesario
      }}>
        <Grid item xs={6} sx={{
          padding: "16px",
          borderTopLeftRadius: 8, // Ajusta el valor según sea necesario
          borderBottomLeftRadius: 8, // Ajusta el valor según sea necesario
          border: "1px solid #ccc",
          backgroundColor:"white"
        }}>
          <Container>
            {/* PARTE DE ARRIBA */}
            <Grid item xs={12} marginBottom={2}>
              <Typography variant="h5" sx={{color:"#666666", textAlign: "center"}} >Universidad Galileo</Typography>
            </Grid>
            <Grid item xs={12}>
              <Divider sx={{marginBottom:5}}>
                <img src={usaclogo} width={"100%"}/>
              </Divider>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h5" sx={{color:"#666666", textAlign: "center"}} >Facultad de Ciencias de la Comunicación</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography  sx={{color:"#666666", textAlign: "center", marginBottom:2}}> Ingrese sus datos para obtener acceso al Dashboard GYM</Typography>
            </Grid>
          {/* *************** */}
          </Container>
          {Formulario}
        </Grid>
        <Grid item xs={6} sx={{
          padding: "16px",
          backgroundColor: "rgba(102, 102, 102, 0.5)",
          borderTopRightRadius: 8, // Ajusta el valor según sea necesario
          borderBottomRightRadius: 8, // Ajusta el valor según sea necesario
          border: "1px solid #ccc",
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
          
        }}>
          <Grid container>
          <Grid item xs={12}>
            <Typography variant='h4' sx={{color:"white",fontFamily: 'Times New Roman', fontStyle: 'italic' }}>{Leyenda}</Typography>
          </Grid>
          <Grid item xs={12}> 
          <Typography variant='h4' sx={{color:"white",fontFamily: 'Brush Script MT' }} align='right'>{Leyenda2}</Typography>
          
          </Grid>
          </Grid>
          
          
          
        </Grid>
      </Grid>
    </Grid>
  );
}