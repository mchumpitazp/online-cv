"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// modules
require('dotenv').config();
const express = require('express');
const path = require('path');
// const cors = require('cors');
const helmet = require('helmet');
const connectDB = require('./db');
//routers
const projectRouter = require('./routes/projectsRouter');
// set server
const port = '3003';
const app = express();
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
    console.log(`Happy ${app.get('env')}`);
    connectDB();
});
// tools
app.use(express.static(path.join(__dirname, '../public')));
app.use(helmet());
// app.use(cors());
// routers
app.use('/api/projects', projectRouter);
