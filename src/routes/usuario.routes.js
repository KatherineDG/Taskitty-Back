import {postUsuario, getUsuario} from '../controllers/usuario.controller.js';
import { Router } from 'express';

const router = Router();

router.post('/postUsuario', postUsuario);
router.get('/getUsuario', getUsuario);

export default router;