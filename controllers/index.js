const controlRouter = require('express').Router();

const apiRouter = require('./api');
const homeRouter = require('./homeRoutes');

controlRouter.use('/api', apiRouter);
controlRouter.use('/', homeRouter);


module.exports = controlRouter;