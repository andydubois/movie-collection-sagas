const express = require("express");
const pool = require("../modules/pool");

const router = express.Router();

router.get("/:id", (req, res) => {
    const queryText = `SELECT * FROM movies
    WHERE "id" = $1`
  pool
    .query(queryText, [req.params.id])
    .then(results => {
      res.send(results.rows[0]);
      console.log(results.rows[0])
    })
    .catch(error => {
      console.log("error in server side GET", error);
      res.sendStatus(500);
    });
});

router.get("/genre/:id", (req, res) => {
    const queryText = `SELECT "genres".name FROM "genres"
        JOIN "movie_genres" ON "genres".id="movie_genres".genre_id
        WHERE "movie_genres".movie_id=$1;`;
    pool.query(queryText, [req.params.id])
    .then(results => {
        res.send(results.rows);
    })
    .catch(error => {
        console.log("error in server side genre GET", error);
        res.sendStatus(500);
    });
});

module.exports = router;
