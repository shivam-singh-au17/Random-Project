
const Admin = require("../models/admin.model");
const express = require("express");
const crudService = require("./crud.controller");
const router = express.Router();


router.post("/admin", crudService(Admin).create);
router.get("/admin", crudService(Admin).get);
router.get("/admin/:id", crudService(Admin).getOne);
router.put("/admin/:id", crudService(Admin).update);
router.delete("/admin/:id", crudService(Admin).deleteOne);


module.exports = router;

