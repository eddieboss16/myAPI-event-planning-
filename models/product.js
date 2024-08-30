const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let productSchema = newSchema(
    {
        name: {type: String},
        description: {type: String},
        price: {type: Number},
        instock: {type: Boolean}
    }
);


module.exports = mongoose.module("product", productSchema);