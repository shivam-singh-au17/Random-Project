
const JobCategory = require("../models/jobCategory.model");
const express = require("express");
const crudService = require("./crud.controller");
const router = express.Router();

router.post("/JobCategory", crudService(JobCategory).create);
router.get("/JobCategory", crudService(JobCategory).get);
router.get("/JobCategory/:id", crudService(JobCategory).getOne);
router.put("/JobCategory/:id", crudService(JobCategory).update);
router.delete("/JobCategory/:id", crudService(JobCategory).deleteOne);


module.exports = router;

