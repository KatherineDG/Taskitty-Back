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
    const equipo = { nombre: nombreEquipo, tableros: [], miembros: { administradores: [idUsuario], invitados: [] } };
    usuario.equipos.push(equipo);
    await usuario.save();

    const idEquipo = usuario.equipos.find(equipo => equipo.nombre === nombreEquipo)._id;
    enviarNotificacionInvitacionEquipo(idUsuario, idEquipo, invitados);
}

const getEquipos = async (idUsuario, nombreEquipo) => {
    const usuario = await UsuarioSchema.findById(idUsuario);
    return usuario.equipos.find(equipo => equipo.nombre === nombreEquipo);
}

const aceptarInvitacionEquipo = async (idUsuarioInvitado, idUsuarioEmisor, idEquipo, idInvitacion) => {
    const usuarioInvitado = await UsuarioSchema.findById(idUsuarioInvitado);
    const usuarioEmisor = await UsuarioSchema.findById(idUsuarioEmisor);

    //agrego al invitado al equipo
    const equipo = usuarioEmisor.equipos.find(equipo => equipo._id.toString() === idEquipo);
    equipo.miembros.invitados.push(usuarioInvitado);

    //elimino la invitacion del invitado
    const invitacionIndex = usuarioInvitado.invitaciones.findIndex(invitacion => invitacion._id.toString() === idInvitacion);
    if (invitacionIndex !== -1) {
        usuarioInvitado.invitaciones.splice(invitacionIndex, 1);
    }

    await Promise.all([usuarioInvitado.save(), usuarioEmisor.save()]);
}

export default { postEquipo, getEquipos, aceptarInvitacionEquipo };