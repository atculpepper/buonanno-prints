// this is actually not secure at all
const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

const credentials = {
  id: 1,
  username: 'camera',
  password: 'action',
  isLoggedIn: false,
};

router.get('/user', (req, res) => {
  if (credentials.isLoggedIn) {
    res.send({
      username: credentials.username,
      id: credentials.id,
    });
  } else {
    res.sendStatus(401);
  }
});

router.post('/login', (req, res) => {
  const loginCreds = req.body;

  if (
    loginCreds.username === credentials.username &&
    loginCreds.password === credentials.password
  ) {
    credentials.isLoggedIn = true;
    res.send(200);
  } else {
    credentials.isLoggedIn = false;
    res.send(401);
  }
});

router.post('/logout', (req, res) => {
  credentials.isLoggedIn = false;
  res.send(200);
});

module.exports = router;
