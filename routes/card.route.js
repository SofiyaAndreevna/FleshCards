const express = require('express');
const router = express.Router();
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const Card = require('../components/Card');

router.get('/', (req, res) => {
  const elem = React.createElement(Card, {
    title: 'QCard',
  });
  const html = ReactDOMServer.renderToStaticMarkup(elem);
  const data = `<!DOCTYPE html>${html}`;
  res.send(data);
});

module.exports = router;
