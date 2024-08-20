import TareaService from '../services/tarea.service.js';

const postTarea = async (req, res) => {
    const {idUsuario, esEquipo, nombreEspacio, nombreEquipo, nombreTablero, nombreTarea, descripcion, dificultad, miembrosCargo} = req.body;
    try {
        const usuario = await TareaService.postTarea(idUsuario, esEquipo, nombreEspacio, nombreEquipo, nombreTablero, nombreTarea, descripcion, dificultad, miembrosCargo);
        res.status(200).json(usuario);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

const getTarea = async (req, res) => {
    const {idUsuario, esEquipo, nombreEspacio, nombreTablero, nombreTarea} = req.body;
    try {
        const tarea = await TareaService.getTarea(idUsuario, esEquipo, nombreEspacio, nombreTablero, nombreTarea);
        res.status(200).json(tarea);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

export {postTarea, getTarea};