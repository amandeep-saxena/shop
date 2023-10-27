const express = require("express");

const db = express.Router();


const { adddata, findProduct ,findbyId } = require("../controller/product");

// const product = require("../model/product");




db.post("/add", adddata);

db.get("/findData", findProduct);
db.post("/items/:id", findbyId);


module.exports = db