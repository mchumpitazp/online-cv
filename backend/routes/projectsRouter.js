const express = require('express');
const bodyParser = require('body-parser');
const cors = require('./cors');
const Projects = require('../models/projects');

const projectRouter = express.Router();

projectRouter.use(bodyParser.json());

projectRouter.route('/')
.options(cors.corsWithOptions, (req, res) => { res.sendStatus(200) })
.get(cors.cors, (req, res, next) => {
    Projects.find(req.query)
    .then(projects => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(projects);
    }, err => next(err))
    .catch(err => next(err));
})

module.exports = projectRouter;