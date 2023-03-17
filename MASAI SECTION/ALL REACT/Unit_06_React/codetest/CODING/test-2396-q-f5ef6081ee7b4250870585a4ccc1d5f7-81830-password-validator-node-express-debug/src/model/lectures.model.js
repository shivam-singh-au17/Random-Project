
const mongoose = require("mongoose");

const lecturesSchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        instructor: { type: mongoose.Schema.Types.ObjectId, ref: "Student" },
        batch: { type: String, required: true },
    },
    {
        versionKey: false,
        timestamps: true
    }
)

const Lectures = mongoose.model("lectures", lecturesSchema);

module.exports = Lectures;

