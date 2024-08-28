import EquipoService from '../services/equipo.service.js';

const postEquipo = async (req, res) => {
    const {idUsuario, nombreEquipo, invitados} = req.body;
    try {
        await EquipoService.postEquipo(idUsuario, nombreEquipo, invitados);
        return res.status(201).json({ message: 'Equipo creado' });
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

const aceptarInvitacionEquipo = async (req, res) => {
    const {idUsuarioInvitado, idUsuarioEmisor, idEquipo, idInvitacion} = req.body;
    console.log(idUsuarioInvitado, idUsuarioEmisor, idEquipo, idInvitacion);
    try {
        await EquipoService.aceptarInvitacionEquipo(idUsuarioInvitado,idUsuarioEmisor, idEquipo, idInvitacion);
        res.status(200).send();
    } catch (error) {
        res.status(404).send();
    }
}

export { postEquipo, getEquipos, aceptarInvitacionEquipo };