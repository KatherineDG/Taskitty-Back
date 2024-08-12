import express from 'express';
import UsuarioRouter from './routes/usuario.routes.js';

const app = express(); 

app.use(express.json());

app.use('/api/usuarios', UsuarioRouter)

export default app;