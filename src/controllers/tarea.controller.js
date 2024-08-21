import TareaService from '../services/tarea.service.js';

const postTareaEquipo = async (req, res) => {
    const {idUsuario, nombreEquipo, nombreTablero, nombreTarea, descripcion, dificultad, miembrosCargo} = req.body;
    try {
        const usuario = await TareaService.postTarea(idUsuario, nombreEquipo, nombreTablero, nombreTarea, descripcion, dificultad, miembrosCargo);
        res.status(200).json(usuario);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

const postTareaEspacio = async (req, res) => {
    const {idUsuario, nombreEspacio, nombreTablero, nombreTarea, descripcion, dificultad} = req.body;
    try {
        const usuario = await TareaService.postTarea(idUsuario, nombreEspacio, nombreTablero, nombreTarea, descripcion, dificultad);
        res.status(200).json(usuario);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

const getTareaEquipo = async (req, res) => {
    const {idUsuario, nombreEquipo, nombreTablero, nombreTarea} = req.body;
    try {
        const tarea = await TareaService.getTarea(idUsuario, nombreEquipo, nombreTablero, nombreTarea);
        res.status(200).json(tarea);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

const getTareaEspacio = async (req, res) => {
    const {idUsuario, nombreEspacio, nombreTablero, nombreTarea} = req.body;
    try {
        const tarea = await TareaService.getTarea(idUsuario, nombreEspacio, nombreTablero, nombreTarea);
        res.status(200).json(tarea);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

export {postTareaEquipo, postTareaEspacio, getTareaEquipo, getTareaEspacio};