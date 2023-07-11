"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');
const Projects = require('../models/projects');
const dataRouter = express.Router();
dataRouter.use(bodyParser.json());
dataRouter.route('/')
    .get((_req, res, _next) => __awaiter(void 0, void 0, void 0, function* () {
    const modelsPath = __dirname + '/../models';
    const modelsFiles = fs.readdirSync(modelsPath);
    let database = {};
    for (const file of modelsFiles) {
        const model = require(modelsPath + '/' + file);
        const arr = yield model.find();
        const key = file.replace('.js', '');
        // let obj: {[key: string]: any} = {};
        // obj[key] = arr;
        // database.push(obj);
        database[key] = arr;
    }
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(database);
    // async function getData() {
    //     let database: any[] = [];
    //     const modelsFiles = await fs.promises.readdir(modelsPath);
    //     await modelsFiles.forEach(async (file: string) => {
    //         const model = require(modelsPath + '/' + file);
    //         const arr = await model.find({});
    //         const key = file.replace('.js', '');
    //         let obj: {[key: string]: any} = {};
    //         obj[key] = arr;
    //         database.push(obj);
    //     });
    //     return database;
    // }
    // async function sendResponse() {
    //     const database = await getData();
    //     console.log(database);
    //     res.statusCode = 200;
    //     res.setHeader('Content-Type', 'application/json');
    //     res.json(database);
    // }
    // sendResponse();
    // Projects.find(req.query)
    // .then((projects: any) => {
    //     res.statusCode = 200;
    //     res.setHeader('Content-Type', 'application/json');
    //     res.json(projects);
    // }, (err: any) => next(err))
    // .catch((err: any) => next(err));
}));
module.exports = dataRouter;
