const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const router = require('./router');
const mongoose = require('mongoose');

const App = express();

App.use(cors());
App.use(bodyParser.json());
App.use(router);

(async function bootstrap () {
  try {
    mongoose.connect('mongodb://localhost:27017/events');
    console.log('Mongoose server listening 👌');
  }
  catch (e) {
    console.error(e);
  }
  App.listen(3030, () => console.log('Express server listening 🚀 on http://localhost:3030'));
})();

module.exports = {App};