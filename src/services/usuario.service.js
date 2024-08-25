import UsuarioSchema from "../models/usuario.model.js";
import bcrypt from 'bcryptjs';

const postUsuario = async (nombre, email, contrasena, foto) => {
    const usuario = new UsuarioSchema({nombre, email, contrasena, foto});
    return await usuario.save();
}

const getUsuario = async (idUsuario) => {
    const usuario = await UsuarioSchema.findById(idUsuario);
    return usuario;
}

const loginUsuario = async (nombre, contrasena) => {
    const usuario = await UsuarioSchema.findOne({nombre});
    if (!usuario) {
        throw new Error('Usuario no encontrado');
    }
    const esContrasenaValida = await bcrypt.compare(contrasena, usuario.contrasena);

    if (!esContrasenaValida) {
        throw new Error('Contraseña incorrecta');
    }
    return usuario;
}

export default {postUsuario, getUsuario, loginUsuario};