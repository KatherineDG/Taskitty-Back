import UsuarioService from '../services/usuario.service.js';

const postUsuario = async (req, res) => {
    try {
        const {nombre, email, contrasena, foto} = req.body;
        const fotoPath = `icons/${foto}`;
        const usuario = await UsuarioService.postUsuario(nombre, email, contrasena, fotoPath);
        console.log(usuario);
        res.status(201).json(usuario);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
};

const getUsuario = async (req, res) => {
    try {
        const usuario = await UsuarioService.getUsuario();
        res.status(200).json(usuario);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
};

export {postUsuario, getUsuario};