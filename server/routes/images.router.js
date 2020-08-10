const express = require('express');
const pool = require('../modules/pool');
//dependencies from imran sayed tutorial
const aws = require('aws-sdk');
const multerS3 = require('multer-s3');
const multer = require('multer');
const path = require('path');
const url = require('url');

const router = express.Router();

module.exports = router;
