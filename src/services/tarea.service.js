import UsuarioSchema from "../models/usuario.model.js";

//la tarea se crea en el Hacer
const postTareaEquipo = async (idUsuario, nombreEquipo, nombreTablero, nombreTarea, descripcion, dificultad, miembrosCargo) => {
    const usuario = await UsuarioSchema.findById(idUsuario);
    console.log(miembrosCargo)
    const tarea = {nombre: nombreTarea, descripcion: descripcion, dificultad: dificultad, estado: 'Hacer', miembrosCargo: miembrosCargo};
    const equipo = usuario.equipos.find(equipo => equipo.nombre === nombreEquipo);
    const tablero = equipo.tableros.find(tablero => tablero.nombre === nombreTablero);
    tablero.tareas.push(tarea);
    return await usuario.save();
}

const postTareaEspacio = async (idUsuario, nombreEspacio, nombreTablero, nombreTarea, descripcion, dificultad) => {
    const usuario = await UsuarioSchema.findById(idUsuario);
    const tarea = {nombre: nombreTarea, descripcion: descripcion, dificultad: dificultad, estado: 'Hacer'};
    const espacio = usuario.espacios.find(espacio => espacio.nombre === nombreEspacio);
    const tablero = espacio.tableros.find(tablero => tablero.nombre === nombreTablero);
    tablero.tareas.push(tarea);
    return await usuario.save();
}

const getTareaEquipo = async (idUsuario, nombreEquipo, nombreTablero, nombreTarea) => {
    const usuario = await UsuarioSchema.findById(idUsuario);
    const equipo = usuario.equipos.find(equipo => equipo.nombre === nombreEquipo);
    const tablero = equipo.tableros.find(tablero => tablero.nombre === nombreTablero);
    return tablero.tareas.find(tarea => tarea.nombre === nombreTarea);
}

const getTareaEspacio = async (idUsuario, nombreEspacio, nombreTablero, nombreTarea) => {
    const usuario = await UsuarioSchema.findById(idUsuario);
    const espacio = usuario.espacios.find(espacio => espacio.nombre === nombreEspacio);
    const tablero = espacio.tableros.find(tablero => tablero.nombre === nombreTablero);
    return tablero.tareas.find(tarea => tarea.nombre === nombreTarea);
}

export default {postTareaEquipo, postTareaEspacio, getTareaEquipo, getTareaEspacio};