import express from 'express';
import UsuarioRouter from './routes/usuario.routes.js';
import TareaRouter from './routes/tarea.routes.js';
import TableroRouter from './routes/tablero.routes.js';
import EquipoRouter from './routes/equipo.routes.js';
import EspacioRouter from './routes/espacio.routes.js';

const app = express(); 

app.use(express.json());

app.use('/api/usuarios', UsuarioRouter)
app.use('/api/tareas', TareaRouter)
app.use('/api/tableros', TableroRouter)
app.use('/api/equipos', EquipoRouter)
app.use('/api/espacios', EspacioRouter)

export default app;