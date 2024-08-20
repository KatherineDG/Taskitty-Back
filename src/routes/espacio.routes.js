import {postEspacio, getEspacio} from '../controllers/espacio.controllers';

const router = require('express').Router();

router.post('/postEspacio', postEspacio);
router.get('/getEspacio', getEspacio);

export default router;