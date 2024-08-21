import UsuarioSchema from "../models/usuario.model.js";

const enviarNotificacionInvitacionEquipo = async (idEmisor, idEquipo, invitados) => {
    invitados.forEach(async (invitado) => {
        const usuarioInvitado = await UsuarioSchema.findById(invitado);
        const invitacion = { emisor: idEmisor, equipo: idEquipo };
        usuarioInvitado.invitaciones.push(invitacion);
        await usuarioInvitado.save();
    });
}

const postEquipo = async (idUsuario, nombreEquipo, invitados) => {
    const usuario = await UsuarioSchema.findById(idUsuario);
    const equipo = { nombre: nombreEquipo, tableros: [], miembros: { administradores: [idUsuario], invitados: invitados } };
    usuario.equipos.push(equipo);
    await usuario.save();

    const idEquipo = usuario.equipos.find(equipo => equipo.nombre === nombreEquipo)._id;
    enviarNotificacionInvitacionEquipo(idUsuario, idEquipo, invitados);
}

const getEquipos = async (idUsuario, nombreEquipo) => {
    const usuario = await UsuarioSchema.findById(idUsuario);
    return usuario.equipos.find(equipo => equipo.nombre === nombreEquipo);
}

export default { postEquipo, getEquipos };