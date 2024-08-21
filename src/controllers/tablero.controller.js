import TableroService from '../services/tablero.service.js';

const postTableroEquipo = async (req, res) => {
    const { idUsuario, nombreEquipo, nombreTablero } = req.body;
    try {
        await TableroService.postTableroEquipo(idUsuario, nombreEquipo, nombreTablero);
        return res.status(201).json({ message: 'Tablero creado' });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

const postTableroEspacio = async (req, res) => {
    const { idUsuario, nombreTablero } = req.body;
    try {
        await TableroService.postTableroEspacio(idUsuario, nombreTablero);
        return res.status(201).json({ message: 'Tablero creado' });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

const getTablerosEquipo = async (req, res) => {
    const { idUsuario, nombreEquipo } = req.body;
    try {
        const tableros = await TableroService.getTablerosEquipo(idUsuario, nombreEquipo);
        return res.status(200).json(tableros);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

const getTablerosEspacio = async (req, res) => {
    const { idUsuario } = req.body;
    try {
        const tableros = await TableroService.getTablerosEspacio(idUsuario);
        return res.status(200).json(tableros);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}


export { postTableroEquipo, postTableroEspacio, getTablerosEquipo, getTablerosEspacio };