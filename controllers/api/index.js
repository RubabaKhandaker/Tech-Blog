const apiRoute = require('express').Router();

const commentRoute = require('./commentRoutes');
const userRoute = require('./userRoutes');
const postRoute = require('./postRoutes');

router.use('/comments', commentRoute);
router.use('/users', userRoute);
router.use('/posts', postRoute);


module.exports = apiRoute;