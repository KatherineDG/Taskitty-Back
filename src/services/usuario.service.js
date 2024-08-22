import UsuarioSchema from "../models/usuario.model.js";

const postUsuario = async (nombre, email, contrasena, foto) => {
    const usuario = new UsuarioSchema({nombre, email, contrasena, foto});
    return await usuario.save();
}

const getUsuario = async (idUsuario) => {
    const usuario = await UsuarioSchema.findById(idUsuario);
    return usuario;
}

const postTableroEspacioUsuario = async (id, tablero) => {
    const usuario = await UsuarioSchema.findById(id);
    usuario.espacio.tableros.push(tablero);
    return await usuario.save();
}

const getTablerosEspacioUsuario = async (id) => {
    const usuario = await UsuarioSchema.findById(id);
    return usuario.espacio;
}

const getTablerosEquipoUsuario = async (id) => {
    const usuario = await UsuarioSchema.findById(id);
    return usuario.equipos;
}


export default {postUsuario, getUsuario, postTableroEspacioUsuario, getTablerosEspacioUsuario, getTablerosEquipoUsuario};