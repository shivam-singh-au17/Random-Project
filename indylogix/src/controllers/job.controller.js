
const Job = require("../models/job.model");
const express = require("express");
const crudService = require("./crud.controller");
const router = express.Router();

router.post("/Job", crudService(Job).create);
router.get("/Job", crudService(Job).get);
router.get("/Job/:id", crudService(Job).getOne);
router.put("/Job/:id", crudService(Job).update);
router.delete("/Job/:id", crudService(Job).deleteOne);


module.exports = router;

