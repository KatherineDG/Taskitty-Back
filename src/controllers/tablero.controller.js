import TableroService from '../services/tablero.service';

const postTablero = async (req, res) => {
    const { idUsuario, esEquipo, nombreEquipo, nombreTablero } = req.body;
    try {
        await TableroService.postTablero(idUsuario, esEquipo, nombreEquipo, nombreTablero);
        return res.status(201).json({ message: 'Tablero creado' });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

const getTableros = async (req, res) => {
    const { idUsuario, esEquipo } = req.body;
    try {
        const tableros = await TableroService.getTableros(idUsuario, esEquipo);
        return res.status(200).json(tableros);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export default { postTablero, getTableros };