import {postTarea, getTarea} from '../controllers/tarea.controller';

const router = require('express').Router();

router.post('/postTarea', postTarea);
router.post('/getTarea', getTarea);

export default router;