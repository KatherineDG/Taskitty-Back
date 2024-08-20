import UsuarioSchema from "../models/usuario.model.js";

const postEspacio = async (idUsuario, nombreEspacio) => {
    const usuario = await UsuarioSchema.findById(idUsuario);
    const espacioAdd = { nombre: nombreEspacio, tableros: [] };
    usuario.espacio.push(espacioAdd);
    await usuario.save();
}

const getEspacios = async (idUsuario) => {
    const usuario = await UsuarioSchema.findById(idUsuario);
    return usuario.espacios;
}

export default { postEspacio, getEspacios };