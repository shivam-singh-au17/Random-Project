

const Employer = require("../models/employer.model");
const express = require("express");
const crudService = require("./employerCrud.controller");
const router = express.Router();

router.post("/Employer", crudService(Employer).create);
router.get("/Employer", crudService(Employer).get);
router.get("/Employer/:id", crudService(Employer).getOne);
router.put("/Employer/:id", crudService(Employer).update);
router.delete("/Employer/:id", crudService(Employer).deleteOne);
router.get("/Employer/companyName/:id", crudService(Employer).searchBycompanyName);
router.get("/Employer/EmployerName/:id", crudService(Employer).searchByEmployerName);


module.exports = router;

