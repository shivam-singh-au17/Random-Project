const mongoose = require("mongoose");
let Schema = mongoose.Schema;

let adminSchema = new Schema(
    {
        name: { type: String },
        email: { type: String },
        password: { type: String },
    },
    {
        timestamps: true,
        versionKey: false
    }
);


let Admin = mongoose.model("admin", adminSchema);

module.exports = Admin;


