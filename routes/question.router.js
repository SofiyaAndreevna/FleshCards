const express = require('express');
const router = express.Router();
const Questions = require('../components/Questions');
const React = require('react');
const ReactDOMServer = require('react-dom/server');

router.get('/', (req,res) => {
    const elem = React.createElement(Questions, {
        title: 'QuestionsPage',
      });
      const html = ReactDOMServer.renderToStaticMarkup(elem);
      const data = `<!DOCTYPE html>${html}`;
      res.send(data);
});

module.exports = router;