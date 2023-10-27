const mongoose = require("mongoose");
mongoose.set('strictQuery', true);

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    countInStock: {
        type: Number,
        required: true,
    },
    imageUrl: {
        type: String,

    },
});

// name: {
//     type: String,
// },
// email: {
//     type: String,

// },
// phone: {
//     type: Number,

// }


module.exports = new mongoose.model('boog', productSchema)