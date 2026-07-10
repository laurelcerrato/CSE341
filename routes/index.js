const routes = require('express').Router();
const lesson1Controller = require('../controllers/lesson1');
routes.get('/', lesson1Controller.laurelRoute);
routes.get('/complete', lesson1Controller.laurelCompleteRoute);
routes.get('/richard', lesson1Controller.richardRoute);

module.exports = routes;
