import {postTablero, getTableros} from '../controllers/tablero.controller.js';
import express from 'express';

const router = express.Router();

router.post('/postTablero', postTablero);
router.get('/getTableros', getTableros);

export default router;  