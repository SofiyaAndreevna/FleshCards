const express = require('express');
const router = express.Router();
const registrationRoute = require('./registration.route');
const titlesRouter = require('./titles.router');
const qustionRouter = require('./question.route');

router.use('/', registrationRoute);
router.use('/titles', titlesRouter);
router.use('/titles/titleId/question/0', qustionRouter);

module.exports = router;
