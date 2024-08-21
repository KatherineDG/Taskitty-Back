import {postTareaEquipo, postTareaEspacio, getTareaEquipo, getTareaEspacio} from '../controllers/tarea.controller.js';
import express from 'express';

const router = express.Router();

router.post('/postTareaEquipo', postTareaEquipo);
router.get('/getTareaEquipo', getTareaEquipo);
router.post('/postTareaEspacio', postTareaEspacio);
router.get('/getTareaEspacio', getTareaEspacio);

export default router;