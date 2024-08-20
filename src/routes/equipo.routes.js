import { postEquipo, getEquipos } from "../controllers/equipo.controller.js";
import express from "express";

const router = express.Router();

router.post('/postEquipo', postEquipo);
router.get('/getEquipos', getEquipos);

export default router;