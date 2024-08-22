import {postUsuario, getUsuario, getTablerosEspacioUsuario, getTablerosEquipoUsuario} from '../controllers/usuario.controller.js';
import { Router } from 'express';

const router = Router();

router.post('/postUsuario', postUsuario);
router.get('/getUsuario/:idUsuario', getUsuario);
router.get('/getTablerosEspacioUsuario/:id', getTablerosEspacioUsuario);
router.get('/getTablerosEquipoUsuario/:id', getTablerosEquipoUsuario);

export default router;