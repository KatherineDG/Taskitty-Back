import mongoose from "mongoose";
import bcryptjs from "bcryptjs";

const Schema = mongoose.Schema;

// Definición de TareaSchema
const TareaSchema = new Schema({
    nombre: { type: String, required: true },
    descripcion: { type: String, required: true },
    dificultad: { type: String, required: true, enum: ['Facil', 'Media', 'Dificil'] },
    estado: { type: String, required: true, enum: ['Hacer', 'En Progreso', 'Terminada'] },
    miembrosCargo: { type: [Schema.Types.ObjectId], ref: 'Usuario', default: [] }
});

// Definición de TableroSchema
const TableroSchema = new Schema({
    nombre: { type: String, required: true },
    tareas: { type: [TareaSchema], default: [] }
});

// Definición de EspacioSchema
//const EspacioSchema = new Schema({
//    tableros: { type: [TableroSchema], default: [] }
//});

// Definición de MiembrosSchema
const MiembrosSchema = new Schema({
    administradores: { type: [Schema.Types.ObjectId], ref: 'Usuario', required: true },
    invitados: { type: [Schema.Types.ObjectId], ref: 'Usuario', default: [], required: true }
});

// Definición de EquipoSchema
const EquipoSchema = new Schema({
    nombre: { type: String, required: true },
    tableros: { type: [TableroSchema], default: [] },
    miembros: { type: MiembrosSchema, default: () => ({}) }
});

const InvitacionSchema = new Schema({
    emisor: { type: Schema.Types.ObjectId, ref: 'Usuario', required: true },
    nombreEmisor: { type: String, required: true },
    equipo: { type: Schema.Types.ObjectId, ref: 'Equipo', required: true },
    nombreEquipo: { type: String, required: true }
});

// Definición de usuarioSchema
const usuarioSchema = new Schema({
    nombre: { type: String, required: true },
    email: { type: String, required: true },
    contrasena: { type: String, required: false }, // Cambiado a false
    foto: { type: String, required: true },
    espacio: { type: [TableroSchema], default: [] },
    equipos: { type: [EquipoSchema], default: [] },
    invitaciones: { type: [InvitacionSchema], default: [] },
    googleId: { type: String, required: false } // Agrega este campo para almacenar el ID de Google
});




// Middleware para hashear la contraseña antes de guardar
usuarioSchema.pre('save', async function(next) {
    const usuario = this;
    // Solo intentar hashear la contraseña si existe
    if (usuario.isModified('contrasena') && usuario.contrasena) {
        const salt = await bcryptjs.genSalt(10);
        usuario.contrasena = await bcryptjs.hash(usuario.contrasena, salt);
    }
    next();
});

const Usuario = mongoose.model('Usuario', usuarioSchema, 'usuarios');
const Equipo = mongoose.model('Equipo', EquipoSchema, 'usuarios');
export default Usuario;
