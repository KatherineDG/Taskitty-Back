import {postEspacio, getEspacios} from '../controllers/espacio.controller.js';
import express from 'express';

const router = express.Router();

router.post('/postEspacio', postEspacio);
router.get('/getEspacio', getEspacios);

export default router;