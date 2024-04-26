const express = require('express');
const users = require('./userRoute.js');
const categories = require('./categoryRoute.js');
const courses = require('./courseRoute.js');

module.exports = (app) => {
  app.use(
    express.json(),
    users,
    categories,
    courses
  );
}

