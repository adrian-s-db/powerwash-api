require('dotenv').config();

const supertest = require('supertest');
const express = require('express');
const router = require('../router');
const User = require('../models/user');

const mongoose = require('mongoose');

const mockUsr = {
  email: "test@test.com",
  uid: '123456',
  savedMachines: ['654321'],
  starredMachine: '123456'
}

describe('User tests', () => {
  
  const app = express();
  app.use(express.json());
  app.use(router);
  const request = supertest(app);


  beforeAll(async () => {
    const url = process.env.ATLAS_MONGO_DB_URL_TEST
    await mongoose.connect(url, { useNewUrlParser: true });
  });

  afterAll(async () => {
    // await User.deleteMany()
    // await mongoose.disconnect(process.env.ATLAS_MONGO_DB_URL_TEST);
  })

  it('users are returned in JSON', async (done) => {
    const users = request
      .get('/users')
      .expect('Content-Type', /json/)
      .expect(200)
      done();
  })
  
  // it('Is possible to create a user and take it back from database', async (done) => {
  //   const res = request
  //     .post('/users',)
  //     .send(mockUsr)
  //     .expect(201)


  //     const usrDB = await User.findOne({email: mockUsr.email})
  //     console.log(usrDB);
  //     expect(usrDB).toBe(mockUsr)
  //     done()
  //     // const userDB = await request.get('/users');
  //     // console.log(userDB)
  //     // expect(userDB).toContain(mockUsr);

  // })

})

