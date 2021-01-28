const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// // ------PRINTS ROUTES ----------//

router.get('/', (req, res) => {
  // get all movie data
  const queryText = `SELECT "prints".id, "prints".title, "prints".image, "prints".description, array_agg("genres".name) as "genre"
  FROM "prints"
  LEFT JOIN "print_genres" ON "prints".id = "print_genres".print_id
  LEFT JOIN "genres" ON "print_genres".genres_id = "genres".id
  GROUP BY "prints".id
  ORDER BY "title" ASC;`;

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

router.get('/details/:id', (req, res) => {
  // get a single prints' data
  const queryString = `SELECT * FROM "prints" WHERE "id" = $1;`;
  const printId = req.params.id;

  pool
    .query(queryString, [printId])
    .then((responseDb) => {
      res.send(responseDb.rows);
    })
    .catch((err) => {
      console.warn(err);
      res.sendStatus(500);
    });
});

router.put('/edit/:id', (req, res) => {
  // update data for a single movie
  const queryText = `UPDATE "prints"
    SET "title" = $1, "description" = $2
    WHERE "id" = $3;`;
  const printId = req.params.id;
  const newMovieData = req.body;

  pool
    .query(queryText, [
      // how is title coming to server
      newMovieData.title,
      // how to get the description
      newMovieData.description,
      printId,
    ])
    .then((responseDb) => {
      res.sendStatus(200);
    })
    .catch((err) => {
      console.warn(err);
      res.sendStatus(500);
    });
});

router.get('/genres/:id', (req, res) => {
  // get a single movies' data
  const queryString = `SELECT "print_genres".id, "print_genres".print_id, "print_genres".genres_id, "prints".title, "genres".name FROM "prints"
    JOIN "print_genres" ON "prints".id = "print_genres".print_id
    JOIN "genres" ON "print_genres".genres_id = "genres".id
    WHERE "prints".id = $1;`;
  const printId = req.params.id;

  pool
    .query(queryString, [printId])
    .then((responseDb) => {
      res.send(responseDb.rows);
    })
    .catch((err) => {
      console.warn(err);
      res.sendStatus(500);
    });
});

router.delete('/genres/:junctionId', (req, res) => {
  const moviesGenresId = req.params.junctionId;
  const queryString = `DELETE FROM "print_genres" WHERE "id" = $1;`;

  pool
    .query(queryString, [moviesGenresId])
    .then((responseDb) => {
      res.sendStatus(200);
    })
    .catch((err) => {
      console.warn(err);
      res.sendStatus(500);
    });
});

router.post('/genres', (req, res) => {
  const moviesGenresData = req.body;
  const queryString = `INSERT INTO "print_genres" ("print_id", "genres_id")
    VALUES ($1, $2);`;

  pool
    .query(queryString, [
      moviesGenresData.prints_id,
      moviesGenresData.genres_id,
    ])
    .then((responseDb) => {
      res.sendStatus(201);
    })
    .catch((err) => {
      console.warn(err);
      res.sendStatus(500);
    });
});

//post route for new prints
router.post('/', (req, res) => {
  const printsData = req.body;
  const queryString = `INSERT INTO "prints" ("title", "image", "description")
    VALUES ($1, $2, $3);`;
  console.log(printsData);

  pool
    .query(queryString, [
      printsData.title,
      printsData.url,
      printsData.description,
    ])
    .then((response) => {
      res.sendStatus(201);
    })
    .catch((err) => {
      console.warn(err);
      res.sendStatus(500);
    });
});

module.exports = router;

//legacy code
// GET route to get all the movies from the database
// router.get("/", (req, res) => {
//   const queryText = `SELECT * FROM "movies" ORDER BY title ASC;`;
//   pool
//     .query(queryText)

//     // .then(res => res.text())
//     // .then(text =>console.log(text));
//     .then((responseDB) => {
//       const dbRows = responseDB.rows;
//       console.table(dbRows);
//       res.send(dbRows);
//     })
//     .catch((error) => {
//       console.log(`Error making database query ${queryText}`, error);
//       res.sendStatus(500);
//     });
// });

// // route for updating movie data
// router.put("/edit/:id", (req, res) => {
//   const itemId = req.params.id;

//   const newMovieData = req.body;
//   const queryText = `UPDATE "movies"
//       SET "title"=$1, "description"=$2
//       WHERE "id" = $3;`;

//   pool
//     .query(queryText, [
//       //how is the title coming to the server:
//       newMovieData.title,
//       newMovieData.description,
//       itemId,
//     ])
//     .then((responseDB) => {
//       res.sendStatus(200);
//       console.log("changed something in the database", responseDB);
//     })
//     .catch((err) => {
//       console.log("Error updating movie:", err);
//       res.sendStatus(500);
//     });
// });

// module.exports = router;

// router.get("/details/:id", (req, res) => {
//   // get a single movies' data
//   const queryString = `SELECT * FROM "movies" WHERE "id" = $1;`;
//   const printId = req.params.id;

//   pool
//     //what is happening here with [printId] as a second argument to .query method ?
//     .query(queryString, [printId])
//     .then((responseDb) => {
//       res.send(responseDb.rows);
//     })
//     .catch((err) => {
//       console.warn(err);
//       res.sendStatus(500);
//     });
// });

// router.get("/genres/:id", (req, res) => {
//   // get a single movies' data
//   //this command returns multiple rows of movie title when they have multiple genres
//   const queryString = `SELECT "movies_genres".movies_id, "movies_genres".genres_id, "movies".title, "genres".name FROM "movies"
//     JOIN "movies_genres" ON "movies".id = "movies_genres".movies_id
//     JOIN "genres" ON "movies_genres".genres_id = "genres".id
//     WHERE "movies".id = $1;`;
//   const printId = req.params.id;

//   pool
//     .query(queryString, [printId])
//     .then((responseDb) => {
//       res.send(responseDb.rows);
//     })
//     .catch((err) => {
//       console.warn(err);
//       res.sendStatus(500);
//     });
// });
