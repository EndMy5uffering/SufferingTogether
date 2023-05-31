const express = require('express')
const router = express.Router()


router.use((req, res, next) => {
    console.log("middleware")
    next()
})

router.get('/testroute', (req, res) => {
    console.log('[GET] /testroute')
    res.json({Route: "testroute"})
})

router.get('/test2', (req, res) => {
    console.log('[GET] /test2')
    res.json({Route: 'test2'})
})

module.exports = router