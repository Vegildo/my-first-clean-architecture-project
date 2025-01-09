
function auth(req, res, next) {
    if (req.headers.authorization === 'my-secret-token') {
        next();
    } else {
        res.sendStatus(401).json({ error: 'Unauthorized' });
    }
}

module.exports = auth;

