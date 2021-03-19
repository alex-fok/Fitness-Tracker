const express = require('express');
const router = express.Router();
const root = `${__dirname}/../public`;

router.get('/exercise', (req, res) => {
    res.sendFile('exercise.html', { root });
});

router.get('/stats', (req, res) => {
    res.sendFile('stats.html', { root });
});

module.exports = router;