import EquipoService from '../services/equipo.service.js';

const postEquipo = async (req, res) => {
    const {idUsuario, nombreEquipo, invitados} = req.body;
    try {
        await EquipoService.postEquipo(idUsuario, nombreEquipo, invitados);
        res.status(201).send();
    } catch (error) {
        res.status
    }
}

const getEquipos = async (req, res) => {
    const {idUsuario, nombreEquipo} = req.body;
    try {
        const equipo = await EquipoService.getEquipos(idUsuario, nombreEquipo);
        res.status(200).send(equipo);
    } catch (error) {
        res.status(404).send();
    }
}

export { postEquipo, getEquipos };