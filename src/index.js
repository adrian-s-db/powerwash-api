require('dotenv').config();

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const router = require('./router');
const mongoose = require('mongoose');
const {ATLAS_MONGO_DB_URL, ATLAS_MONGO_DB_URL_TEST, NODE_ENV} = process.env

const connectionString = NODE_ENV === 'test' 
  ? ATLAS_MONGO_DB_URL_TEST
  : ATLAS_MONGO_DB_URL

const App = express();

App.use(cors());
App.use(bodyParser.json());
App.use(router);


const port = process.env.PORT || 3030;

(async function bootstrap () {
  try {
    await mongoose.connect(ATLAS_MONGO_DB_URL);
    console.log('Mongoose server listening 👌');
  }
  catch (e) {
    console.error(e);
  }
  App.listen(port, '192.168.1.162', () => console.log('Express server listening 🚀'));
})();

module.exports = {App};