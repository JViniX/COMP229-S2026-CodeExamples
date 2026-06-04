
module.exports.welcome = function(req, res, next){
    res.setHeader('Content-Type', 'text/plain');
    res.send("Welcome do my Backend API Server.")
}

module.exports.sayHello = function(req, res, next){
    res.setHeader('Content-Type', 'text/plain');
    res.send("Hello World!")
}

module.exports.sayBye = function (req, res, next){
    res.setHeader('Content-Type', 'text/plain');
    res.send("Bye, everyone!")
}


const user = {
    name: 'John Smith',
    email: 'john@smith.ca'
}

module.exports.getUser = function (req, res, next){
    res.header('Content-Type', 'application/json');
    
    res.json(user);
}

module.exports.getEmail = function (req, res, next){
    let userEmail = req.params.email;
    res.status(201);
    res.send("Email sent: "+ userEmail);
}