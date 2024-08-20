import {postTablero, getTableros} from '../controllers/tablero.controller';

const router = require('express').Router();

router.post('/postTablero', postTablero);
router.get('/getTableros', getTableros);

export default router;  