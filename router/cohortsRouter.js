const express = require('express');
const knex = require('../db/client');

const router = express.Router()

router.get('/new', (req, res) => {
    res.render('cohorts/new')
})




module.exports = router