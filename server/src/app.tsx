// modules
const express = require('express');
const path = require('path');
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
})

// tools
app.use(express.static(path.join(__dirname, '../public')));
app.use(helmet());

// routers
app.use('/api/projects', projectRouter);

export {};