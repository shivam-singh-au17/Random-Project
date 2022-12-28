const mongoose = require("mongoose");
let Schema = mongoose.Schema;

let jobSchema = new Schema(
    {
        jobData: { type: String },
    },
    {
        timestamps: true,
        versionKey: false
    }
);


let Job = mongoose.model("job", jobSchema);

module.exports = Job;


