const express = require('express');
const users = require('./userRoute.js');

module.exports = (app) => {
  app.use(
    express.json(),
    users
  );
}

