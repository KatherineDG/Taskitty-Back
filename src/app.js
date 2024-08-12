import express from 'express';
import UsuarioRoutes from './routes/usuario.routes.js';

const app = express(); 

app.use(express.json());

app.use('/api/usuarios', UsuarioRoutes)

export default app;