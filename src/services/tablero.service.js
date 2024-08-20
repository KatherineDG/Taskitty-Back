import UsuarioSchema from '../models/usuario.model.js';

const postTablero = async (idUsuario, esEquipo, nombreEquipo, nombreTablero) => {
    const usuario = await UsuarioSchema.findById(idUsuario);
    const tablero = { nombre: nombreTablero, tareas: [] };
    if (esEquipo){
        const equipo = usuario.equipos.find(equipo => equipo.nombre === nombreEquipo);
        equipo.tableros.push(tablero);
    } else {
        const espacio = usuario.espacio;
        espacio.tableros.push(tablero);
    }
}

const getTableros = async (idUsuario, esEquipo) => {
    const usuario = await UsuarioSchema.findById(idUsuario);
    if (esEquipo){
        const equipo = usuario.equipos.find(equipo => equipo)
        return equipo.tableros;
    } else {
        const espacio = usuario.espacio;
        return espacio.tableros;
    }
}

export default { postTablero, getTableros };