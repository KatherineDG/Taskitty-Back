import UsuarioSquema from "../models/usuario.model.js";

const postUsuario = async (nombre, email, contrasena, foto) => {
    const usuario = new UsuarioSquema({nombre, email, contrasena, foto});
    return await usuario.save();
}

const getUsuario = async () => {
    const usuario = await UsuarioSquema.find();
    return usuario;
}

export default {postUsuario, getUsuario}