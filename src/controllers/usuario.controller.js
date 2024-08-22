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
    const {idUsuario} = req.params;
    try {
        const usuario = await UsuarioService.getUsuario(idUsuario);
        res.status(200).json(usuario);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
};

const postTableroEspacioUsuario = async (req, res) => {
    try {
        const {id} = req.params;
        const tablero = req.body;
        const usuario = await UsuarioService.postTableroEspacioUsuario(id, tablero);
        res.status(201).json(usuario);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

const getTablerosEspacioUsuario = async (req, res) => {
    try {
        const {id} = req.params;
        const tableros = await UsuarioService.getTablerosEspacioUsuario(id);
        res.status(200).json(tableros);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

const getTablerosEquipoUsuario = async (req, res) => {
    try {
        const {id} = req.params;
        const tableros = await UsuarioService.getTablerosEquipoUsuario(id);
        res.status(200).json(tableros);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}


export {postUsuario, getUsuario, getTablerosEspacioUsuario, getTablerosEquipoUsuario};