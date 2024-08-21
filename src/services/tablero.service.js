import UsuarioSchema from '../models/usuario.model.js';

const postTableroEquipo = async (idUsuario, nombreEquipo, nombreTablero) => {
    const usuario = await UsuarioSchema.findById(idUsuario);
    const tablero = { nombre: nombreTablero };
    const equipo = usuario.equipos.find(equipo => equipo.nombre === nombreEquipo);
    equipo.tableros.push(tablero);
    await usuario.save();
}

const postTableroEspacio = async (idUsuario, nombreTablero) => {
    const usuario = await UsuarioSchema.findById(idUsuario);
    const tablero = { nombre: nombreTablero };
    const espacio = usuario.espacio;
    espacio.push(tablero);
    await usuario.save();
}

const getTablerosEquipo = async (idUsuario, nombreEquipo) => {
    const usuario = await UsuarioSchema.findById(idUsuario);
    const equipo = usuario.equipos.find(equipo => equipo.nombre === nombreEquipo);
    return equipo.tableros;
}

const getTablerosEspacio = async (idUsuario) => {
    const usuario = await UsuarioSchema.findById(idUsuario);
    const espacio = usuario.espacio;
    return espacio.tableros;
}

export default { postTableroEquipo, postTableroEspacio, getTablerosEquipo, getTablerosEspacio };