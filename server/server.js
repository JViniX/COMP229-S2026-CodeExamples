const express = require('express');
const logger = require('morgan');
const createError = require('http-errors');
const cors = require('cors');
const app = express();

const db = require('./config/db');
db().catch(console.dir);

// Adds headers: Access-Control-Allow-Origin: *
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routers import
let indexRouter = require('./app/routes/index');
let projectsRouter = require('./app/routes/projects');
let usersRouter = require('./app/routes/users');
let authRouter = require('./app/controllers/auth');

// Middlewares assignment
app.use(logger('dev'));
app.use('/', indexRouter);
app.use('/auth', authRouter);
app.use('/api/projects', projectsRouter);
app.use('/api/users', usersRouter);

// catch 404 and foward to error handler
app.use(function (req, res, next) {
    next(createError(404));
})

// error handler
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.json(
        {
            "success": false,
            "message": err.message
        }
    );
});

// Initialize the server
app.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});