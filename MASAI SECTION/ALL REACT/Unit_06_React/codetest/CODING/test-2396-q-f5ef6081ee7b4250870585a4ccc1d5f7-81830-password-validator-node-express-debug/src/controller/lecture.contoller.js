
const express = require("express");
const router = express.Router();
const Lectures = require("../model/lectures.model");

const protect = require("../middlewares/protect")

router.post("/lecture", async (req, res) => {
    try {
        const lecture = await Lectures.create(req.body)
        res.status(200).json({
            status: 200,
            data: lecture,
        });
    } catch (err) {
        res.status(400).json({
            status: 400,
            message: err.message,
        });
    }
});

router.get("/lecture", protect, async (req, res) => {
    try {
        // const lecture = await Lectures.find({}).select("-password").lean().exec();
        const lecture = await Lectures.find({}).populate().lean().exec();
        res.status(200).json({
            status: 200,
            data: lecture,
        });
    } catch (err) {
        res.status(400).json({
            status: 400,
            message: err.message,
        });
    }
});

router.get("/lecture/:lectureId", async (req, res) => {
    try {
        const lecture = await Lectures.findOne({
            _id: req.params.lectureId
        });
        if (lecture) {
            res.status(200).json({
                status: 200,
                data: lecture,
            });
        }
        res.status(400).json({
            status: 400,
            message: "No lecture found",
        });
    } catch (err) {
        res.status(400).json({
            status: 400,
            message: err.message,
        });
    }
});

router.put("/lecture/:lectureId", async (req, res) => {
    try {
        let lecture = await Lectures.findByIdAndUpdate(req.params.lectureId, req.body, {
            new: true,
        });
        if (lecture) {
            res.status(200).json({
                status: 200,
                data: lecture,
            });
        }
        res.status(400).json({
            status: 400,
            message: "No lecture found",
        });
    } catch (err) {
        res.status(400).json({
            status: 400,
            message: err.message,
        });
    }
});

router.delete("/lecture/:lectureId", async (req, res) => {
    try {
        let lecture = await Lectures.findByIdAndRemove(req.params.lectureId);
        if (lecture) {
            res.status(200).json({
                status: 200,
                message: "Lectures deleted successfully",
            });
        } else {
            res.status(400).json({
                status: 400,
                message: "No lecture found",
            });
        }
    } catch (err) {
        res.status(400).json({
            status: 400,
            message: err.message,
        });
    }
});

module.exports = router;
