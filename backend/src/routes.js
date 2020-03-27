const express = require('express')
const routes = express.Router()

const OngController = require('./Controllers/OngController')
const ProfileController = require('./Controllers/ProfilleController')
const IncidentController = require('./Controllers/IncidentController')
const SessionController = require('./Controllers/SessionController')

routes.post('/sessions', SessionController.create)

routes.get('/ongs',OngController.index)
routes.post('/ongs', OngController.create)

routes.post('/incidents', IncidentController.create)
routes.get('/incidents', IncidentController.index)
routes.delete('/incidents/:id', IncidentController.delete)

routes.get('/profile', ProfileController.index)


module.exports = routes