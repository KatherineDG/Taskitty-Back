import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import passport from 'passport';
import session from 'express-session';
import cors from 'cors'; 
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import Usuario from './models/usuario.model.js';


import UsuarioRouter from './routes/usuario.routes.js';
import TareaRouter from './routes/tarea.routes.js';
import TableroRouter from './routes/tablero.routes.js';
import EquipoRouter from './routes/equipo.routes.js';
import EspacioRouter from './routes/espacio.routes.js';

const app = express(); 

app.use(express.json());

app.use(cors({
  origin: 'http://localhost:3000',
}));

// Configurar express-session
app.use(session({
    secret: 'your_secret_key',
    resave: false,
    saveUninitialized: true,
  }));


  // Inicializar passport y la sesión
app.use(passport.initialize());
app.use(passport.session());

// Configurar la estrategia de Google
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:5000/auth/google/callback"
  },
  async (accessToken, refreshToken, profile, done) => {
    try {
      let usuario = await Usuario.findOne({ googleId: profile.id });
      if (!usuario) {
        usuario = new Usuario({
          nombre: profile.displayName,
          googleId: profile.id,
          email: profile.emails[0].value,
          foto: profile.photos[0].value
        });
        await usuario.save();
      }
      return done(null, usuario);
    } catch (error) {
      return done(error, null);
    }
  }
));



// Serializar y deserializar el usuario
passport.serializeUser((usuario, done) => {
    done(null, usuario.id);
  });
  
  passport.deserializeUser(async (id, done) => {
    try {
      const usuario = await Usuario.findById(id);
      done(null, usuario);
    } catch (error) {
      done(error, null);
    }
  });
  
  // Rutas para autenticación con Google
  app.get('/auth/google', passport.authenticate('google', {
    scope: ['profile', 'email']
  }));
  
  app.get('/auth/google/callback', 
    passport.authenticate('google', { failureRedirect: '/' }),
    (req, res) => {
      // Autenticación exitosa, redirigir al usuario a la página principal
      res.redirect(`http://localhost:3000/home-espacios?userId=${req.user.id}`);
    }
  );
  
  app.get('/logout', (req, res) => {
    req.logout(() => {
      res.redirect('/');
    });
  });
  
  // Ruta de prueba para ver la información del usuario autenticado
  app.get('/profile', (req, res) => {
    if (!req.isAuthenticated()) {
      return res.redirect('/auth/google');
    }
    res.json(req.user);
  });


app.use('/api/usuarios', UsuarioRouter)
app.use('/api/tareas', TareaRouter)
app.use('/api/tableros', TableroRouter)
app.use('/api/equipos', EquipoRouter)
app.use('/api/espacios', EspacioRouter)

export default app;