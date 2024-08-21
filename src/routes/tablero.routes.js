import {postTableroEquipo, postTableroEspacio, getTablerosEquipo, getTablerosEspacio} from '../controllers/tablero.controller.js';
import express from 'express';

const router = express.Router();

router.post('/postTableroEquipo', postTableroEquipo);
router.get('/getTablerosEquipo', getTablerosEquipo);
router.post('/postTableroEspacio', postTableroEspacio);
router.get('/getTablerosEspacio', getTablerosEspacio);

export default router;  