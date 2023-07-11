// modules
require('dotenv').config();
const express = require('express');
const expressLayout = require('express-ejs-layouts');
const path = require('path');
const cors = require('cors');
const helmet = require('helmet');
const connectDB = require('./db');

//routers
const projectRouter = require('./routes/projectsRouter');
const dataRouter = require('./routes/dataRouter');

// set server
const port = '3003';
const app = express();
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
    console.log(`Happy ${app.get('env')}`);
    connectDB();
})

// tools
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '../public')));
app.use(helmet());
app.use(cors());

// routers
app.use('/api/projects', projectRouter);
app.use('/api/data', dataRouter);



// CRUD DEV

// // view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.use(expressLayout);
// app.set('layout', './layout');
// app.set('view engine', 'ejs');

// // home 
// app.get('/', (req: any, res: any) => {
//     res.render('index');
    
//     const locals = {
//         title: 'Admin',
//         description: 'CRUD NODEJS'
//     }
// })

export {};