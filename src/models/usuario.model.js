import mongoose from "mongoose";
import bcryptjs from "bcryptjs";

const Squema = mongoose.Schema;

const usuarioSquema = new Squema({
    nombre: {type: String, required: true},
    email: {type: String, required: true},
    contrasena: {type: String, required: true}
});

usuarioSquema.pre('save', async function(next) {
    const usuario = this;
    if (usuario.isModified('contrasena') || usuario.isNew) {
        const salt = await bcryptjs.genSalt(10);
        usuario.contrasena = await bcryptjs.hash(usuario.contrasena, salt);
    }
    next();
});

const UsuarioSquema = mongoose.model('Usuario', usuarioSquema, 'usuarios');
export default UsuarioSquema;