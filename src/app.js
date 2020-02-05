require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const validateBearerToken = require('./validate-bearer-token');
const bookmarksRouter = require('./bookmark-router/bookmark-router');

const { NODE_ENV } = require('./config');
const morganOption = NODE_ENV === 'production' ? 'tiny' : 'common';

const app = express();
app.use(express.json());
app.use(morgan(morganOption));
app.use(helmet());
app.use(cors());
app.use(validateBearerToken);

// console.log(bookmarksRouter);
app.use('/bookmarks', bookmarksRouter);

app.get('/bookmars', (req, res) => {
  res.send('Hello, world!');
});

module.exports = app;
