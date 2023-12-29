var mongoose = require("mongoose");

var productSchema = mongoose.Schema({
    title: String,
    price: Number,
});

var Product = mongoose.model("Product", productSchema);
module.exports = Product;
