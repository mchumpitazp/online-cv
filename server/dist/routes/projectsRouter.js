"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const bodyParser = require('body-parser');
const Projects = require('../models/projects');
const projectRouter = express.Router();
projectRouter.use(bodyParser.json());
projectRouter.route('/')
    .get((req, res, next) => {
    Projects.find(req.query)
        .then((projects) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(projects);
    }, (err) => next(err))
        .catch((err) => next(err));
});
module.exports = projectRouter;
