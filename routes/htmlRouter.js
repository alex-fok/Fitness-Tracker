const express = require('express');
const router = express.Router();
const root = `${__dirname}/../public`;

router.get('/exercise', (req, res) => {
    res.sendFile('exercise.html', { root });
});

router.get('/status', (req, res) => {
    res.sendFile('status.html', { root });
});

module.exports = router;