const express = require('express');
const bodyParser = require('body-parser');
const cors = require('./cors');
const Files = require('../models/files');

const fileRouter = express.Router();

fileRouter.use(bodyParser.json());

fileRouter.route('/')
.options(cors.corsWithOptions, (req, res) => { res.sendStatus(200) })
.get(cors.cors, (req, res, next) => {
    Files.find(req.query)
    .then(files => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(files);
    }, err => next(err))
    .catch(err => next(err));
})

module.exports = fileRouter;