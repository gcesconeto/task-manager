module.exports = (err, _req, res, _next) => {
    if (err.message && err.status) {
        return res.status(err.status).send({ message: err.message });
    }
    return res.status(500).send({ message: err.message });
};