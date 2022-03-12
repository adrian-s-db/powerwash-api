require('dotenv').config();

import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import router from './router';
import mongoose from 'mongoose';
const {ATLAS_MONGO_DB_URL, ATLAS_MONGO_DB_URL_TEST, NODE_ENV} = process.env

const connectionString = NODE_ENV === 'test' 
  ? ATLAS_MONGO_DB_URL_TEST
  : ATLAS_MONGO_DB_URL

const App = express();

App.use(cors());
App.use(bodyParser.json());
App.use(router);


const port = 3030;

const server = (async function bootstrap () {
  try {
    if (connectionString) {

      await mongoose.connect(connectionString);
      console.log('Mongoose server listening 👌');
    } else {
      console.error('No Database URL provided');
    }
  }
  catch (e) {
    console.error(e);
  }
  const server = await App.listen(port, '192.168.1.162', () => console.log(`Express server listening in 192.168.1.162${port} 🚀`));
  return server;
})();



export = {App, server}