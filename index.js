const express = require('express');
const path = require('path');
const pg = require('pg');
const router = express.Router();
const connectionString = process.env.SCHIST_DB || 'postgres://localhost:5432/schist';


/* ==== INDEX ==== */
router.get('/',
  (req, res, next) => res.sendFile('index.html', {'root': path.join('dash', 'src')}));
/* ==== INDEX ==== */



/* ==== POST ==== */
router.post('/api/v1/todos', (req, res, next) => {
  /* Turn the REST POST into a DB INSERT */
  let results = [];
  const data = {text: req.body.text, complete: false};

  // get a database connection from the pool and insert and item
  pg.connect(connectionString, (err, client, done) => {
    if (err) {
      // no DB connection
      done();
      console.log(err);
      return res.status(500).json({success: false, data: err});
    }

    // SQL injection
    client.query(
        'INSERT INTO items(text, complete) VALUES($1, $2)', [data.text, data.complete]
    );

    // start retrieving results and stream them back as they become available
    const query = client.query('SELECT * FROM items ORDER BY id ASC');
    query.on('row', (row) => results.push(row));
    // stream run dry, release the DB connection and return results
    query.on('end', () => {
      done();
      return res.json(results);
    });
  });
  /* pg.connect */
});
/* ==== POST ==== */



/* ==== GET ==== */
router.get('/api/v1/todos', (req, res, next) => {
  const results = [];
  // get a Postgres client from the connection pool
  pg.connect(connectionString, (err, client, done) => {
    // handle connection errors
    if(err) {
      done();
      console.log(err);
      return res.status(500).json({success: false, data: err});
    }
    // SQL Query > Select Data
    const query = client.query('SELECT * FROM items ORDER BY id ASC;');
    // stream results back one row at a time
    query.on('row', (row) => results.push(row));
    // after all data is returned, close connection and return results
    query.on('end', () => {
      done();
      return res.json(results);
    });
  });
  /* pg.connect */
});
/* ==== GET ==== */



/* ==== UPDATE ==== */
router.put('/api/v1/todos/:todo_id', (req, res, next) => {
  const results = [];
  // Grab data from the URL parameters
  const id = req.params.todo_id;
  // Grab data from http request
  const data = {text: req.body.text, complete: req.body.complete};
  // Get a Postgres client from the connection pool
  pg.connect(connectionString, (err, client, done) => {
    // Handle connection errors
    if(err) {
      done();
      console.log(err);
      return res.status(500).json({success: false, data: err});
    }
    // SQL Query > Update Data
    client.query('UPDATE items SET text=($1), complete=($2) WHERE id=($3)',
        [data.text, data.complete, id]);
    // SQL Query > Select Data
    const query = client.query("SELECT * FROM items ORDER BY id ASC");
    // Stream results back one row at a time
    query.on('row', (row) => results.push(row));
    // After all data is returned, close connection and return results
    query.on('end', function() {
      done();
      return res.json(results);
    });
  });
  /* pg.connect */
});
/* ==== UPDATE ==== */



/* ==== DELETE ==== */
router.delete('/api/v1/todos/:todo_id', (req, res, next) => {
  const results = [];
  // Grab data from the URL parameters
  const id = req.params.todo_id;
  // Get a Postgres client from the connection pool
  pg.connect(connectionString, (err, client, done) => {
    // Handle connection errors
    if(err) {
      done();
      console.log(err);
      return res.status(500).json({success: false, data: err});
    }
    // SQL Query > Delete Data
    client.query('DELETE FROM items WHERE id=($1)', [id]);
    // SQL Query > Select Data
    const query = client.query('SELECT * FROM items ORDER BY id ASC');
    // Stream results back one row at a time
    query.on('row', (row) => results.push(row));
    // After all data is returned, close connection and return results
    query.on('end', () => {
      done();
      return res.json(results);
    });
  });
  /* pg.connect */
});
/* ==== DELETE ==== */


module.exports = router;
