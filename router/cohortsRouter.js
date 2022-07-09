const express = require('express');
const knex = require('../db/client');

const router = express.Router()

// router.get('./new', (req, res) => {
//     knex()
// })
app.get('/new', (req, res) => {
    res.render('new')
})

module.exports = router