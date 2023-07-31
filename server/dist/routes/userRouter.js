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
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const Users = require('../models/users');
const userRouter = express.Router();
userRouter.use(bodyParser.json());
userRouter.route('/register')
    .post((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newPassword = yield bcrypt.hash(req.body.password, 10);
        yield Users.create({
            name: req.body.name,
            email: req.body.email,
            password: newPassword
        });
        res.json({ status: 'ok' });
    }
    catch (error) {
        console.log(error);
        res.json({ status: 'error', error: 'Error creating user.' });
    }
}));
userRouter.route('/login')
    .post((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield Users.findOne({
        email: req.body.email
    });
    if (!user)
        return res.json({ status: 'error', user: false });
    const isPasswordValid = yield bcrypt.compare(req.body.password, user.password);
    if (isPasswordValid) {
        const token = jwt.sign({
            name: user.name,
            email: user.email
        }, 'secret123', { expiresIn: 300 });
        return res.json({ status: 'ok', user: token });
    }
    else {
        return res.json({ status: 'error', user: false });
    }
}));
module.exports = userRouter;
