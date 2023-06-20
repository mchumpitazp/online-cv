const express = require('express');
import { Request, Response, NextFunction } from 'express';
const bodyParser = require('body-parser');
const cors = require('./cors');
const Projects = require('../models/projects');

const projectRouter = express.Router();

projectRouter.use(bodyParser.json());

projectRouter.route('/')
.options(cors.corsWithOptions, (_req: Request, res: Response) => { res.sendStatus(200) })
.get(cors.cors, (req: Request, res: Response, next: NextFunction) => {
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