const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

router.get('/', (req, res) => {
  // Get all images_tags
  let query = `SELECT * FROM "images_tags"`;
  pool.query(query).then( result => {
    res.send(result.rows);
  }).catch(err => {
    console.log(err);
    res.sendStatus(500);
  })
})


// add a new favorite 
router.post('/', (req, res) => {
  console.log('POST', req.body);

  const sqlQuery = `
  INSERT INTO "images_tags" ("images_id", "tags_id")
  VALUES ($1, $2)`;
  
  pool.query(sqlQuery, [req.body.images_id, req.body.tags_id])
    .then(() => { 
      res.sendStatus(201); 
    })
    .catch((err) => {
      console.log('Error completing SELECT GIF query', err);
      res.sendStatus(500);
    });
});


module.exports = router;