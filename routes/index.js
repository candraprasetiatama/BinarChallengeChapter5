const express = require('express')
const router = express.Router()

let users = require('../db/users.json')

let isLogin = false

router.get('/', (req, res) => {
    
    if(isLogin){
        res.render('game')
    } else {
        res.redirect('/login')
    }
})

router.get('/login', (req, res) => {
    
    if(isLogin){
        res.redirect('/game')
    } else {
        res.render('login')
    }
})

router.post('/login', (req, res) => {
    const {
        username,
        password
    } = req.body

    users.forEach((data, i) => {
        if(username === data.username && password === data.password){
            isLogin = true
            // res.redirect('/game')
        } else {
            alert('password atau username salah')
        }
    })
})

router.get('/register', (req, res) => {
    
    if(isLogin){
        res.redirect('/game')
    } else {
        res.render('register')
    }
})

router.post('/register', (req, res) => {
    const {
        username,
        password
    } = req.body

    const id = users.length === 0 ? 1 : users[users.length - 1].id + 1

    const user = {
        id,
        username,
        password
    }

    users.push(user)

    res.status(201).json(user)
})

module.exports = router