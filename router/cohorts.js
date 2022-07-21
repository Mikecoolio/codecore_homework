const express = require('express');
const knex = require('../db/client');

const router = express.Router()

router.get('/new', (req, res) => {
    res.render('cohorts/new')
})

router.get('/', (req, res) => {
    knex('cohorts')
    .orderBy('id', 'desc')
    .then(cohorts => {
        res.render('cohorts/index', {cohorts: cohorts})
    })
})

router.get('/:id', (req, res) => {
    knex('cohorts')
    .where('id', req.params.id)
    .first()
    .then(cohort => {
        if (!cohort) {
            res.send('No cohort found')
        } else {
            res.render('cohorts/show', {cohort: cohort})
        }
    })   
})

router.get('/new', (req, res) => {
    knex('cohorts')
    .where('id', req.params.id)
    .first()
    .then(cohort => {
        res.render('cohorts/show', {cohort: cohort})
    })
})

router.post('/', (req, res) => {
    console.log(req.body.name)
    console.log(req.body.logo_url)
    console.log("members", req.body.members)

    knex('cohorts')
    .insert({
        members: req.body.members,
        name: req.body.name,
        logo_url: req.body.logo_url
    })
    .returning('*')
    .then(cohorts => {
        const cohort = cohorts[0]
        res.redirect(`cohorts/${cohort.id}`)
    })
})

router.delete("/:id", (req, res) => {
    knex('cohorts')
    .where('id', req.params.id)
    .del()
    .then(() => res.redirect("/cohorts"))
})



module.exports = router