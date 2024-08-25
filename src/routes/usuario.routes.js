import {postUsuario, getUsuario, loginUsuario} from '../controllers/usuario.controller.js';
import { Router } from 'express';

const router = Router();

router.post('/postUsuario', postUsuario);
router.get('/getUsuario/:idUsuario', getUsuario);
router.post('/login', loginUsuario);

export default router;