const express = require('express');
import { Request, Response, NextFunction } from 'express';
const bodyParser = require('body-parser');
const Projects = require('../models/projects');

const projectRouter = express.Router();

projectRouter.use(bodyParser.json());

projectRouter.route('/')
.get((req: Request, res: Response, next: NextFunction) => {
    Projects.find(req.query)
    .then((projects: any) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(projects);
    }, (err: Error) => next(err))
    .catch((err: Error) => next(err));
})
.post((req: Request, res: Response, next: NextFunction) => {
    Projects.create(req.body)
    .then((project: any) => {
        res.statusCode = 201;
        res.setHeader('Content-Type', 'application/json');
        res.json(project);
    }, (err: Error) => next(err))
    .catch((err: Error) => next(err));
})

projectRouter.route('/:projectId')
.put((req: Request, res: Response, next: NextFunction) => {
    Projects.findByIdAndUpdate(req.params.projectId, {
        $set: req.body
    }, { new: true })
    .then((project: any) => {
        res.statusCode = 201;
        res.setHeader('Content-Type', 'application/json');
        res.json(project);
    }, (err: Error) => next(err))
    .catch((err: Error) => next(err));
})

module.exports = projectRouter;
export {};