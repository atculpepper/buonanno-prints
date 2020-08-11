const express = require('express');
const bodyParser = require('body-parser');
//loads environment variables into process.env
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;
const printsRouter = require('./routes/prints.router');
const genresRouter = require('./routes/genres.router');
const authRouter = require('./routes/auth.router');

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for angular requests
app.use(express.static('build')); //serving up static files
app.use(bodyParser.urlencoded({ extended: true })); //tuck sent data onto req.body

/** ---------- ROUTES ---------- **/
//Register moviesRouter
app.use('/api/prints', printsRouter);
app.use('/api/genres', genresRouter);
// create / register new login route
app.use('/api/auth', authRouter);

/** ---------- START SERVER ---------- **/
app.listen(port, function () {
  console.log('Server is running on port: ', port);
});
