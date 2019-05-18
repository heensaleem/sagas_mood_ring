const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

router.get('/', (req, res) => {
  // Get all tags
  let query = `SELECT * FROM "tags"`;
  pool.query(query).then( result => {
    res.send(result.rows);
  }).catch(err => {
    console.log(err);
    res.sendStatus(500);
  })
})

module.exports = router;