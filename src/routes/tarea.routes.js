import {postTarea, getTarea} from '../controllers/tarea.controller.js';
import express from 'express';

const router = express.Router();

router.post('/postTarea', postTarea);
router.post('/getTarea', getTarea);

export default router;