require('dotenv').config()
console.log(process.env.JWT_SECRET)
const express = require('express')
const mongoose = require('mongoose')
const MONGOURL = process.env.MONGO_URL;
const birds = require('./routes/birds')
const app = express()
mongoose.connect(MONGOURL).then(() => {
    console.log("Database connected successfully.");
    app.listen(3000, () => {
      console.log(`Server is running on port 3000`);
    });
  });

const userSchema = new mongoose.Schema({
    prodID: Number,
    price: Number,
    quantity: Number,
  });
const UserModel = mongoose.model("users", userSchema);
app.get("/getUsers", async (req, res) => {
const userData = await UserModel.find();
res.json(userData);
});
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