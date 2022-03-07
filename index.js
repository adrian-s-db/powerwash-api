require('dotenv').config();

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const router = require('./router');
const mongoose = require('mongoose');

const App = express();

App.use(cors());
App.use(bodyParser.json());
App.use(router);


const port = process.env.PORT || 3030;

(async function bootstrap () {
  try {
    mongoose.connect(process.env.ATLAS_MONGO_DB_URL);
    console.log('Mongoose server listening 👌');
  }
  catch (e) {
    console.error(e);
  }
  App.listen(port, () => console.log('Express server listening 🚀'));
})();

module.exports = {App};