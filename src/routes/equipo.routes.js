import { postEquipo, getEquipos, aceptarInvitacionEquipo } from "../controllers/equipo.controller.js";
import express from "express";

const router = express.Router();

router.post('/postEquipo', postEquipo);
router.get('/getEquipos', getEquipos);
router.patch('/aceptarInvitacionEquipo', aceptarInvitacionEquipo);

export default router;