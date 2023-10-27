const express = require("express");

const Prodata = express.Router();


const { adddata, findProduct ,findbyId } = require("../controller/product");

// const product = require("../model/product");




Prodata.post("/add", adddata);

Prodata.get("/findData", findProduct);
Prodata.post("/items/:id", findbyId);


module.exports = Prodata