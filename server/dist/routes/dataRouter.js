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
const authenticate = require('../authenticate');
const dataRouter = express.Router();
dataRouter.use(bodyParser.json());
dataRouter.route('/')
    .get(authenticate.verifyJwt, (req, res, _next) => __awaiter(void 0, void 0, void 0, function* () {
    let database = {};
    const modelsPath = __dirname + '/../models';
    let modelsFiles = fs.readdirSync(modelsPath);
    modelsFiles = modelsFiles.filter((file) => !file.includes('users'));
    for (const file of modelsFiles) {
        const model = require(modelsPath + '/' + file);
        const arr = yield model.find();
        if (arr.length) {
            const key = file.replace('.js', '');
            database[key] = arr;
        }
    }
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(database);
}));
module.exports = dataRouter;
