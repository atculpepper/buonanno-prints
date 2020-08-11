const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;

const app = express();
const printsRouter = require('./routes/prints.router');
const genresRouter = require('./routes/genres.router');
const authRouter = require('./routes/auth.router');
const imagesRouter = require('./routes/images.router');
const UploaderS3Router = require('react-dropzone-s3-uploader/s3router');

require('dotenv').config();

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
app.use('/api/images', imagesRouter);

//AWS registration
app.use(
  '/s3',
  UploaderS3Router({
    bucket: 'renaissance-prints',
    region: 'us-east-2',
    headers: { 'Access-Control-Allow-Origin': '*' },
    ACL: 'public-read',
  })
);

/** ---------- START SERVER ---------- **/
app.listen(port, function () {
  console.log('Server is running on port: ', port);
});
