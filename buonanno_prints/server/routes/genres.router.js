const express = require("express");
const pool = require("../modules/pool");

const router = express.Router();

router.get("/", (req, res) => {
  const queryText = `SELECT * FROM "genres";`;

  pool
    .query(queryText)
    .then((responseDb) => {
      res.send(responseDb.rows);
    })
    .catch((err) => {
      console.warn(err);
      res.sendStatus(500);
    });
});

router.delete("/:id", (req, res) => {
  const genreId = req.params.id;
  const queryString = `DELETE FROM "genres" WHERE "id" = $1;`;

  pool
    .query(queryString, [genreId])
    .then((responseDb) => {
      res.sendStatus(200);
    })
    .catch((err) => {
      console.warn(err);
      res.sendStatus(500);
    });
});

// add new genres
router.post("/", (req, res) => {
  const queryText = `INSERT INTO "genres" ("name")
    VALUES ($1);`;

  pool
    .query(queryText, [req.body.name])
    .then((responseDb) => {
      res.sendStatus(201);
    })
    .catch((err) => {
      console.warn(err);
      res.sendStatus(500);
    });
});

module.exports = router;
