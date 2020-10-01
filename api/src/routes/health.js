const health = require('express').Router();

health.route('/').get((req, res, next) => {
    return res.status(200).send('Jubilant Octo Lab is healthy!');
});

module.exports = health;
