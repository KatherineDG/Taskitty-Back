import EspacioService from '../services/espacio.services';

const postEspacio = async (req, res) => {
    try {
        const { idUsuario, nombreEspacio } = req.body;
        await EspacioService.postEspacio(idUsuario, nombreEspacio);
        res.status(201).json({ message: 'Espacio creado' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getEspacios = async (req, res) => {
    try {
        const { idUsuario } = req.body;
        const espacios = await EspacioService.getEspacios(idUsuario);
        res.status(200).json(espacios);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export default { postEspacio, getEspacios };