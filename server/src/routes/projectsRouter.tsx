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
    }, (err: any) => next(err))
    .catch((err: any) => next(err));
})

module.exports = projectRouter;
export {};