import EquipoService from '../services/equipo.service.js';

const postEquipo = async (req, res) => {
    const {idUsuario, nombreEquipo, invitados} = req.body;
    console.log(idUsuario, nombreEquipo, invitados);
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
    //console.log(idUsuarioInvitado, idUsuarioEmisor, idEquipo, idInvitacion);
    try {
        await EquipoService.aceptarInvitacionEquipo(idUsuarioInvitado,idUsuarioEmisor, idEquipo, idInvitacion);
        res.status(200).json({ message: 'Invitacion aceptada' })
    } catch (error) {
        res.status(404).json({ message: 'Invitacion no se pudo aceptar' })
    }
}

const getNombreEquipo = async (req, res) => {
    const {idUsuario, idEquipo} = req.body;
    try {
        const nombreEquipo = await EquipoService.getNombreEquipo(idUsuario, idEquipo);
        res.status(200).send(nombreEquipo);
    } catch (error) {
        res.status(404).send();
    }
}

const getInvitaciones = async (req, res) => {
    const {idUsuario} = req.body;
    try {
        const invitaciones = await EquipoService.getInvitaciones(idUsuario);
        res.status(200).send(invitaciones);
    } catch (error) {
        res.status(404).send();
    }
}

const rechazarInvitacion = async (req, res) => {
    const {idUsuarioInvitado, idInvitacion} = req.body;
    try{
        await EquipoService.rechazarInvitacion(idUsuarioInvitado, idInvitacion);
        res.status(200).json({ message: 'Invitacion rechazada' })
    } catch (error) {
        res.status(404).json({ message: 'Invitacion no pudo ser rechazada' })
    }
}

export { postEquipo, getEquipos, aceptarInvitacionEquipo, getNombreEquipo, getInvitaciones, rechazarInvitacion };