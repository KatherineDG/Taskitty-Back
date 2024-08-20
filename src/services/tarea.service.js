import UsuarioSchema from "../models/usuario.model";

//la tarea se crea en el Hacer
const postTarea = async (idUsuario, esEquipo, nombreEspacio, nombreEquipo, nombreTablero, nombreTarea, descripcion, dificultad, miembrosCargo) => {
    const usuario = await UsuarioSchema.findById(idUsuario);
    if (esEquipo) {
        const tarea = {nombre: nombreTarea, descripcion: descripcion, dificultad: dificultad, estado: 'Hacer'};
        const equipo = usuario.equipos.find(equipo => equipo.nombre === nombreEquipo);
        const tablero = equipo.tableros.find(tablero => tablero.nombre === nombreTablero);
        tablero.tareas.push(tarea);
        return await usuario.save();
    } else {
        const tarea = {nombre: nombreTarea, descripcion: descripcion, dificultad: dificultad, estado: 'Hacer', miembrosCargo: miembrosCargo};
        const espacio = usuario.espacios.find(espacio => espacio.nombre === nombreEspacio);
        const tablero = espacio.tableros.find(tablero => tablero.nombre === nombreTablero);
        tablero.tareas.push(tarea);
        return await usuario.save();
    }
}

const getTarea = async (idUsuario, esEquipo, nombreEspacio, nombreTablero, nombreTarea) => {
    const usuario = await UsuarioSchema.findById(idUsuario);
    if (esEquipo) {
        const equipo = usuario.equipos.find(equipo => equipo.nombre === nombreEquipo);
        const tablero = equipo.tableros.find(tablero => tablero.nombre === nombreTablero);
        return tablero.tareas.find(tarea => tarea.nombre === nombreTarea);
    } else {
        const espacio = usuario.espacios.find(espacio => espacio.nombre === nombreEspacio);
        const tablero = espacio.tableros.find(tablero => tablero.nombre === nombreTablero);
        return tablero.tareas.find(tarea => tarea.nombre === nombreTarea);
    }
}

export default {postTarea, getTarea};