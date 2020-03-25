const express = require("express");
const OngController = require('./controllers/OngCrontoller');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')
const routes = express.Router();


routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.post('/incidents', IncidentController.create);
routes.get('/incidents', IncidentController.index);
routes.delete('/incidents/:id', IncidentController.delete);

routes.post('/sessions', SessionController.create)

routes.get('/profile', ProfileController.index);

module.exports = routes;