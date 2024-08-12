import UsuarioSquema from "../models/usuario.model.js";

const postUsuario = async (nombre, email, contrasena) => {
    const usuario = new UsuarioSquema({nombre, email, contrasena});
    return await usuario.save();
}

const getUsuario = async () => {
    const usuario = await UsuarioSquema.find();
    return usuario;
}

export default {postUsuario}