const express = require('express');
const app = express();
var bodyParser = require('body-parser')

const  db = require("./router/product")

// const TASK = require("./model/user")
const mongoose = require("mongoose");




app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(db);



// mongodb+srv://saxenaaman903:aman12@Saxena@cluster0.j2jkj8p.mongodb.net/





// mongodb://127.0.0.1:27017/dummy

mongoose.connect("mongodb+srv://aman12:1vcnqNhKU1ORADCk@cluster0.j2jkj8p.mongodb.net", {
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


