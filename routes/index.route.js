const express = require('express');
const router = express.Router();
const registrationRoute = require('./registration.route');
const questionRouter = require('./question.router');
const cardRouter = require('./card.route');

router.use('/', registrationRoute);
router.use('/questions', questionRouter);
router.use('/questions/card', cardRouter);

module.exports = router;