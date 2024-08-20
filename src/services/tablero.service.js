import UsuarioSchema from '../models/usuario.model.js';

const postTablero = async (idUsuario, esEquipo, nombreEquipo, nombreTablero) => {
    //console.log(typeof esEquipo);
    const usuario = await UsuarioSchema.findById(idUsuario);
    //console.log(usuario);
    const tablero = { nombre: nombreTablero };
    if (esEquipo){
        console.log('es equipo');
        const equipo = usuario.equipos.find(equipo => equipo.nombre === nombreEquipo);
        console.log(equipo);
        equipo.tableros.push(tablero);
        console.log(equipo);
        await usuario.save();
    } else {
        const espacio = usuario.espacio;
        espacio.tableros.push(tablero);
        await usuario.save();
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