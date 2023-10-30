const express = require("express")
const mongoose = require("mongoose")
const url = 'mongodb://127.0.0.1/AlienDBex';

const app = express()
app.use(express.json({ extended: true}));
mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection

con.on('open',() =>{
    console.log("connected!!");
})

const alienRouter = require('./routers/aliens');
app.use('/aliens',alienRouter);

app.listen(9000,() => {
    console.log("server running on 9000")
})