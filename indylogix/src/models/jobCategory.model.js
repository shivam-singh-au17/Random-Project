const mongoose = require("mongoose");
let Schema = mongoose.Schema;

let jobCategorySchema = new Schema(
    {
        jobCategory: { type: String },
    },
    {
        timestamps: true,
        versionKey: false
    }
);


let JobCategory = mongoose.model("jobCategory", jobCategorySchema);

module.exports = JobCategory;


