
const mongoose = require("mongoose");
let Schema = mongoose.Schema;

let employerSchema = new Schema(
    {
        name: { type: String },
        email: { type: String },
        address: { type: String },
        phone: { type: String },
        companyName: { type: String },
        jobCategoryId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "jobCategory",
            required: true,
        },
        jobId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "job",
            required: true,
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
);


let Employer = mongoose.model("employer", employerSchema);

module.exports = Employer;


