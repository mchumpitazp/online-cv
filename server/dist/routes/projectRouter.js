"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const bodyParser = require('body-parser');
const Projects = require('../models/projects');
const authenticate = require('../authenticate');
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
    .post(authenticate.verifyJwt, (req, res, next) => {
    Projects.create(req.body)
        .then((project) => {
        res.statusCode = 201;
        res.setHeader('Content-Type', 'application/json');
        res.json(project);
    }, (err) => next(err))
        .catch((err) => next(err));
});
projectRouter.route('/:projectId')
    .get(authenticate.verifyJwt, (req, res, next) => {
    if (req.params.projectId === 'new') {
        Projects.findOne()
            .then((projects) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(projects);
        }, (err) => next(err))
            .catch((err) => next(err));
    }
    else {
        Projects.findById(req.params.projectId)
            .then((projects) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(projects);
        }, (err) => next(err))
            .catch((err) => next(err));
    }
})
    .put(authenticate.verifyJwt, (req, res, next) => {
    Projects.findByIdAndUpdate(req.params.projectId, {
        $set: req.body
    }, { new: true })
        .then((project) => {
        res.statusCode = 201;
        res.setHeader('Content-Type', 'application/json');
        res.json(project);
    }, (err) => next(err))
        .catch((err) => next(err));
})
    .delete(authenticate.verifyJwt, (req, res, next) => {
    Projects.findByIdAndRemove(req.params.projectId)
        .then((project) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(project);
    }, (err) => next(err))
        .catch((err) => next(err));
});
module.exports = projectRouter;
