const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

router.get('/', (req, res) => {
    const queryText = `SELECT * FROM movies
    ORDER BY "title" ASC`;
    pool.query(queryText)
    .then((results) => {
        res.send(results.rows);
    })
    .catch((error) => {
        console.log('error in server side GET', error);
        res.sendStatus(500);
    })
})

module.exports = router;