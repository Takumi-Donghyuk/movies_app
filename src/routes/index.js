const express = require('express');
const routerGenre = require('./Genre_router');
const routerActor = require('./Actor_router');
const routerDirector = require('./Director_router');
const routerMovie = require('./Movie_router');
const router = express.Router();

// colocar las rutas aquí
router.use('/genres', routerGenre)
router.use('/actors', routerActor)
router.use('/directors', routerDirector)
router.use('/movies', routerMovie)

module.exports = router;

