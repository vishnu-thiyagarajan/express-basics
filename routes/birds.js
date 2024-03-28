const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.send('Birds home page')
})

router.post('/about', (req, res) => {
  console.log(req.body);
  res.send('About birds')
})

module.exports = router