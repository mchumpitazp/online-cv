const express = require('express');
import { Request, Response, NextFunction } from 'express';
const bodyParser = require('body-parser');
const fs = require('fs');

const dataRouter = express.Router();
dataRouter.use(bodyParser.json());

dataRouter.route('/')
.get(async (_req: Request, res: Response, _next: NextFunction) => {
    const modelsPath = __dirname + '/../models';
    const modelsFiles = fs.readdirSync(modelsPath);
    let database: {[key: string]: any} = {};

    for (const file of modelsFiles) {
        const model = require(modelsPath + '/' + file);
        const arr = await model.find();
        const key = file.replace('.js', '');
        database[key] = arr;
    }

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(database);
})

module.exports = dataRouter;
export {};