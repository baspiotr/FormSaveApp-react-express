module.exports = function(err, req, res, next) {
    return res.status(500).send({ success: false, error: err });
};
