const express = require('express');
const app = express();
var bodyParser = require('body-parser')
const mongoose = require("mongoose");
const  db = require("./router/product")
// const twilio = require('twilio');
// const TASK = require("./model/user")


const router = require("./router/user")


require('dotenv').config()
console.log(process.env)


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(db);
app.use(router);


// mongodb+srv://saxenaaman903:aman12@Saxena@cluster0.j2jkj8p.mongodb.net/





// mongodb://127.0.0.1:27017/dummy

// const MONGODB = "mongodb+srv://aman12:1vcnqNhKU1ORADCk@cluster0.j2jkj8p.mongodb.net"

// const client = twilio("ACc290201cce35c8c6694fbcd9bc6922be", "23a95cae00806a1af7e7ee4a84d73491");


mongoose.connect(process.env.MONGODB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Connected! successfull-------- '))
    .catch((err)=>{
        console.log(err)
    })









app.get('/123', async (req, res) => {
    try {
        const tasks = await TASK.find(req.body);
        res.status(200).json({ tasks })

    } catch (error) {
        res.status(500).json({ msg: error })

    }
})



app.post('/app1', async (req, res) => {
    try {
        const task = await TASK.create(req.body);
        res.status(201).json({ task });

    } catch (error) {
        res.status(500).json({ msg: error })
    }
})


app.listen(5000, console.log("hii done"));


