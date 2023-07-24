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
})
    .post((req, res, next) => {
    Projects.create(req.body)
        .then((project) => {
        res.statusCode = 201;
        res.setHeader('Content-Type', 'application/json');
        res.json(project);
    }, (err) => next(err))
        .catch((err) => next(err));
});
projectRouter.route('/:projectId')
    .put((req, res, next) => {
    Projects.findByIdAndUpdate(req.params.projectId, {
        $set: req.body
    }, { new: true })
        .then((project) => {
        res.statusCode = 201;
        res.setHeader('Content-Type', 'application/json');
        res.json(project);
    }, (err) => next(err))
        .catch((err) => next(err));
});
module.exports = projectRouter;
