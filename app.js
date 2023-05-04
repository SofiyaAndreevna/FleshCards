require('@babel/register');
const express = require('express');
const path = require('path');
const morgan = require('morgan');
// const renderComponent = require('./middleware/renderComponent');
const app = express();
const PORT = 3000;
app.use(express.static(path.join(__dirname, 'public')));
// app.use(renderComponent);
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const indexRouter = require('./routes/index.route');

app.use('/', indexRouter);

app.listen(PORT, () => {
  console.log(`Server is working with ${PORT} port!`);
});
