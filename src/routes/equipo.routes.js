import { postEquipo, getEquipos, aceptarInvitacionEquipo, getNombreEquipo, getInvitaciones, rechazarInvitacion } from "../controllers/equipo.controller.js";
import express from "express";

const router = express.Router();

router.post('/postEquipo', postEquipo);
router.get('/getEquipos', getEquipos);
router.patch('/aceptarInvitacionEquipo', aceptarInvitacionEquipo);
router.get('/getNombreEquipo', getNombreEquipo);
router.get('/getInvitaciones', getInvitaciones);
router.patch('/rechazarInvitacionEquipo', rechazarInvitacion);

export default router;