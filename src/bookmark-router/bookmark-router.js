const express = require('express');
const logger = require('../logger');
const uuid = require('uuid/v4');
const store = require('../store');

const bookmarksRouter = express.Router();
const bodyParser = express.json();

bookmarksRouter
  .route('/')
  .get((req, res) => {
    res.json(store.bookmarks2);
  })
  .post(bodyParser, (req, res) => {
    const field = ['title', 'url', 'rating'];

    if (!req.body[field]) {
      logger.error(`${field} is required`);
      return res.status(400).send(`${field} is required`);
    }

    const { title, url, description, rating } = req.body;
  });

bookmarksRouter
  .route('/:id')
  .get((req, res) => {
    res.send('got id for get method');
    // move implementation logic into here
  })
  .delete((req, res) => {
    res.send('');
  });

module.exports = bookmarksRouter;
