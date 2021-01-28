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
//Register printsRouter
app.use('/api/prints', printsRouter);
app.use('/api/genres', genresRouter);
// create / register new login route
app.use('/api/auth', authRouter);

app.use(
  '/s3',
  require('react-dropzone-s3-uploader/s3router')({
    bucket: 'renaissance-prints', // required
    region: 'us-east-2', // optional
    headers: { 'Access-Control-Allow-Origin': '*' }, // optional
    ACL: 'public-read', // this is the default - set to `public-read` to let anyone view uploads
  })
);
/** ---------- START SERVER ---------- **/
app.listen(port, function () {
  console.log('Server is running on port: ', port);
});
