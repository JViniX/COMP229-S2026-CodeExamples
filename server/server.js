const express = require('express');
const app = express();

let indexRouter = require('./app/routes/index');

function logger(req, res, next){
    console.log(req.method, req.url);
    next();
}

function welcome(req, res, next){
    res.setHeader('Content-Type', 'text/plain');
    res.send("Welcome do my Backend API Server.")
}

function notFound(req, res, next){
    res.setHeader('Content-Type', 'text/plain');
    res.send("Page Not Found!")
}

const user = {
    name: 'John Smith',
    email: 'john@smith.ca'
}

function getUser(req, res, next){
    res.header('Content-Type', 'application/json');
    
    res.json(user);
}

function getEmail(req, res, next){
    let userEmail = req.params.email;
    res.status(201);
    res.send("Email sent: "+ userEmail);
}

app.use(logger);
app.get("/", welcome);
app.get('/getuser', getUser);
app.get('/sendemail/:email', getEmail);
app.use('/api', indexRouter);
app.use(notFound);

app.listen(3000, ()=>{
    console.log('Server running at http://localhost:3000/');
});