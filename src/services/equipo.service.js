import UsuarioSchema from "../models/usuario.model.js";

const enviarNotificacionInvitacionEquipo = async (idEmisor, idEquipo, invitados, nombreEquipo) => {
    const usuarioEmisor = await UsuarioSchema.findById(idEmisor);
    const equipo = await UsuarioSchema.findById(idEquipo);
    invitados.forEach(async (invitado) => {
        const usuarioInvitado = await UsuarioSchema.findById(invitado);
        const invitacion = { emisor: idEmisor, nombreEmisor:usuarioEmisor.nombre, equipo: idEquipo, nombreEquipo: nombreEquipo };
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
    enviarNotificacionInvitacionEquipo(idUsuario, idEquipo, invitados, nombreEquipo);
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
    console.log(equipo);
    equipo.miembros.invitados.push(usuarioInvitado);
    usuarioInvitado.equipos.push(equipo);

    //elimino la invitacion del invitado
    const invitacionIndex = usuarioInvitado.invitaciones.findIndex(invitacion => invitacion._id.toString() === idInvitacion);
    if (invitacionIndex !== -1) {
        usuarioInvitado.invitaciones.splice(invitacionIndex, 1);
    }

    await Promise.all([usuarioInvitado.save(), usuarioEmisor.save()]);
}

const getNombreEquipo = async (idUsuario, idEquipo) => {
    const usuario = await UsuarioSchema.findById(idUsuario);
    const equipo = usuario.equipos.find(equipo => equipo._id.toString() === idEquipo);
    return equipo.nombre;
}

const getInvitaciones = async (idUsuario) => {
    const usuario = await UsuarioSchema.findById(idUsuario);
    return usuario.invitaciones;
}


const rechazarInvitacion = async (idUsuarioInvitado, idInvitacion) => {
    const usuarioInvitado = await UsuarioSchema.findById(idUsuarioInvitado);

    const invitacionIndex = usuarioInvitado.invitaciones.findIndex(invitacion => invitacion._id.toString() === idInvitacion);
    if (invitacionIndex !== -1) {
        usuarioInvitado.invitaciones.splice(invitacionIndex, 1);
    }

    await usuarioInvitado.save();
}

export default { postEquipo, getEquipos, aceptarInvitacionEquipo, getNombreEquipo, getInvitaciones, rechazarInvitacion };