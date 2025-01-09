
function requestLogger(err, req, res, next) {
    console.log(`${req.method} ${req.url}`);
    next();    
}

module.exports = requestLogger;

