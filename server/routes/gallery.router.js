const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put('/like/:id', (req, res) => {
    console.log(req.params);
    const galleryId = req.params.id;
    const galleryLikes = req.params.likes;
    let sqlText = `UPDATE galleryItems SET "likes"=$1 WHERE "id"=$2;`
    pool.query(sqlText, [galleryLikes, galleryId])
    .then (result => {
        res.sendStatus(200);
    }).catch( error => {
        console.log(`error updating likes for ${galleryId}`, error);
    })
}); // END PUT Route

// GET Route
router.get('/', (req, res) => {
    let sqlText = 'SELECT * FROM galleryItems;'
    pool.query(sqlText)
    .then(result => {
        res.send(result.rows)
    }).catch(error => {
        console.log(`error getting all gallery items`, error);
    })
    // res.send(galleryItems);
}); // END GET Route

module.exports = router;