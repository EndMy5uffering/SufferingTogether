const express = require('express')
const bodyParser = require('body-parser')
const router = express.Router()

router.use(bodyParser.json())
router.use(bodyParser.urlencoded({
    extended: true
}))

router.post('/', (req, res) => {

    const data = req.body
    console.log(data)
    res.json({Data: "Success"})

})


module.exports = router