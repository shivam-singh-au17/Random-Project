
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, minlength: 8 },
    profile_photo_url: [{ type: String, required: true }],
    roles: { type: String, required: true },
})

const Product = mongoose.model("product", productSchema);

module.exports = Product;


