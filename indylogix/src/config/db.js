require("dotenv").config();
const mongoose = require("mongoose");

const db = process.env.DB_URL;

const connect = () => {
    return mongoose.connect(db);
}

module.exports = connect;