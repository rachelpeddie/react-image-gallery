const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put('/like/:id', (req, res) => {
    console.log(`req.params is`, req.params);
    const galleryId = req.params.id;
    let sqlText = `UPDATE galleryItems SET "likes"=likes+1 WHERE "id"=$1;`
    pool.query(sqlText, [galleryId])
    .then (result => {
        res.sendStatus(200);
    }).catch( error => {
        console.log(`error updating likes for ${galleryId}`, error);
    })
}); // END PUT Route

// GET Route
router.get('/', (req, res) => {
    let sqlText = 'SELECT * FROM galleryItems ORDER BY "id";'
    pool.query(sqlText)
    .then(result => {
        res.send(result.rows)
    }).catch(error => {
        console.log(`error getting all gallery items`, error);
    })
    // res.send(galleryItems);
}); // END GET Route

// POST Route
router.post('/', (req, res) => {
    const newGalleryItem = req.body;
    const newPath = req.body.newPath;
    const newDescription = req.body.newDescription;
    const sqlText = `INSERT INTO galleryItems (path, description, likes) VALUES ($1, $2, $3)`;
    pool.query(sqlText, [newPath, newDescription, 0])
    .then( response => {
        console.log(`successfully added new ${newGalleryItem} to gallery`);
        res.sendStatus(201);
    }).catch((error) => {
        console.log(`Error making database query ${sqlText}`, error);
        res.sendStatus(500);
    })
});

module.exports = router;