const express = require('express');
const mysql = require('mysql2');
const dotenv = require('dotenv');

//CORS
const cors = require('cors'); // Importa cors

// Configurar variables de entorno
dotenv.config();

// Crear la aplicación Express
const app = express();
// Configura CORS
app.use(cors({
    origin: '*',//http://localhost:5173 // Permite solicitudes desde el frontend (Vite)
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos permitidos
    credentials: true, // Permite envío de cookies y credenciales
  }));

app.use(express.json()); // Middleware para parsear JSON

// Configuración de conexión a la base de datos
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// Verificar conexión a la base de datos
db.connect((err) => {
  if (err) {
    console.error('Error conectando a la base de datos:', err);
    return;
  }
  console.log('Conexión a la base de datos exitosa');
});

// Ruta base
app.get('/', (req, res) => {
  res.send('¡Bienvenido a la API de Vueltas!');
});

// Puerto del servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});


// Ruta para obtener todos los usuarios
app.get('/usuarios', (req, res) => {
    const query = 'SELECT * FROM Usuario'; // Consulta SQL
    
    db.query(query, (err, results) => {
      if (err) {
        console.error('Error al ejecutar la consulta:', err);
        res.status(500).json({ error: 'Error al obtener los usuarios' });
        return;
      }
      
      res.json(results); // Devuelve los resultados como JSON
    });
  });

  // Endpoint para verificar el login
app.post('/login', (req, res) => {
    const { carnet, password } = req.body;
  
    if (!carnet || !password) {
      return res.status(400).json({ error: 'email y contraseña son requeridos' });
    }
  
    const query = 'SELECT * FROM Usuario WHERE email = ? AND contraseña = ?';
    db.query(query, [carnet, password], (err, results) => {
      if (err) {
        console.error('Error al consultar la base de datos:', err);
        return res.status(500).json({ error: 'Error interno del servidor' });
      }
  
      if (results.length === 0) {
        return res.status(401).json({ error: 'Credenciales incorrectas' });
      }
  
      // Usuario encontrado, enviamos los datos necesarios
      const user = results[0];
      res.json({
        usuario: user.nombre,
        email: user.email,
        id: user.id_usuario,
      });
    });
  });


  app.get('/registros/por-fecha', (req, res) => {
    const query = `
        SELECT 
            COUNT(*) AS total_vueltas, 
            DATE_FORMAT(fecha_hora, '%d/%m/%Y') AS fecha
        FROM Registros
        GROUP BY DATE_FORMAT(fecha_hora, '%d/%m/%Y')
        ORDER BY fecha ASC; -- Ordena por fecha ascendente
    `;

    db.query(query, (err, results) => {
        if (err) {
            console.error('Error al ejecutar la consulta:', err);
            res.status(500).json({ error: 'Error al obtener los registros por fecha' });
            return;
        }

        res.json(results); // Devuelve los resultados como JSON
    });
});

app.get('/calorias/:id', (req, res) => {
  const userId = req.params.id; // Obtén el ID del usuario desde la URL
  const query = `
    SELECT 
      id_usuario, 
      COUNT(*) AS total_vueltas,
      COUNT(*) * 6.4 AS calorias_quemadas
    FROM Registros
    WHERE id_usuario = ?
    GROUP BY id_usuario
  `;
  
  db.query(query, [userId], (err, results) => {
    if (err) {
      console.error('Error al ejecutar la consulta:', err);
      res.status(500).json({ error: 'Error al obtener las calorías' });
      return;
    }
    
    res.json(results.length > 0 ? results[0] : { message: 'No se encontraron registros para este usuario' });
  });
});


  