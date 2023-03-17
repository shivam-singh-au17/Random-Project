const fs = require("fs");
const express = require("express");
const Product = require("../model/product.model");
const router = express.Router();

const uplode = require("../utils/file-uplode")

router.post("/", uplode.single("productimageurl"), async (req, res) => {
    try {
        const product = await Product.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            profile_photo_url: req.file.path,
            roles: req.body.roles,
        })
        return res.status(201).json({ data: product })
    } catch (err) {
        filePaths.map((path) => fs.unlinkSync(path));
        return res.status(500).send(err.message);
    }
})



module.exports = router;

