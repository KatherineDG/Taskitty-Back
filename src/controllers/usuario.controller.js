import UsuarioService from '../services/usuario.service.js';

const postUsuario = async (req, res) => {
    try {
        const {nombre, email, contrasena, foto} = req.body;
        const fotoPath = `icons/${foto}`;
        const usuario = await UsuarioService.postUsuario(nombre, email, contrasena, foto);
        console.log(usuario);
        return res.status(201).json(usuario);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
};

const getUsuario = async (req, res) => {
    const {idUsuario} = req.params;
    try {
        const usuario = await UsuarioService.getUsuario(idUsuario);
        res.status(200).json(usuario);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
};

const loginUsuario = async (req, res) => {
    const {nombre, contrasena} = req.body;
    try {
        const usuario = await UsuarioService.loginUsuario(nombre, contrasena);
        res.status(200).json(usuario);
    }
    catch (error) {
        res.status(400).json({error: error.message});
    }
}


export {postUsuario, getUsuario, loginUsuario};