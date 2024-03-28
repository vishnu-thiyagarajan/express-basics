const express = require('express')
const birds = require('./routes/birds')
const app = express()

app.listen(3000, ()=>{
    console.log("Starting the server")
})
app.use(express.json())
app.use('/birds', birds)
// const middleware = (req, res, next)=>{
//     console.log(new Date().toDateString());
//     if (req?.params?.id === '5') req.user = 'vishnu'
//     next()
// }
// app.get('/:id', middleware, (req, res) => {
//     console.log(req.user);
//     res.status(201).send('hello world')
// })