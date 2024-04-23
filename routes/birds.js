const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken');

router.post('/login', (req, res) => {
  console.log(req.body);
  //check username password matches with db 
  const token = jwt.sign(
    { id: '123', name: 'test user' }, process.env.JWT_SECRET);
  res.send(token)
})
const verifyToken = (req, res, next) => {
  const token = req?.headers?.authorization?.split(" ")[1];
  jwt.verify(token, process.env.JWT_SECRET,(err, result)=>{
    if (result) next();
    else res.send(err);
  })
}
router.get('/', verifyToken, (req, res) => {
  res.send('Birds home page')
})
module.exports = router