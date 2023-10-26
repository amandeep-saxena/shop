const mongoose = require("mongoose");
mongoose.set('strictQuery', true);

const EmpSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
    
    },
    phone: {
        type: Number,

    },
    date: { type: Date, default: Date.now },


})
module.exports = new mongoose.model('TASK', EmpSchema)