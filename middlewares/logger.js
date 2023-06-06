module.exports = (req, res, next) => {
    console.log(req.originalUrl);
    console.log(req.hostname);
    console.log(req.protocol);

    next();
}