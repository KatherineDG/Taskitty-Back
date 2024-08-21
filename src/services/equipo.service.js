import UsuarioSchema from "../models/usuario.model.js";

const postEquipo = async (idUsuario, nombreEquipo, invitados) => {
    const usuario = await UsuarioSchema.findById(idUsuario);
    const equipo = { nombre: nombreEquipo, tableros: [], miembros: { administradores: [idUsuario], invitados: invitados } };
    usuario.equipos.push(equipo);
    await usuario.save();
}

const getEquipos = async (idUsuario, nombreEquipo) => {
    const usuario = await UsuarioSchema.findById(idUsuario);
    return usuario.equipos.find(equipo => equipo.nombre === nombreEquipo);
}

export default { postEquipo, getEquipos };