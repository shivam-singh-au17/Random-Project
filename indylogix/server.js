require("dotenv").config();
const express = require("express");
const connect = require("./src/config/db")
const app = express();
app.use(express.json());

const port = process.env.PORT || 3000;

const adminController = require("./src/controllers/admin.controller");
const JobCategoryController = require("./src/controllers/jobCategory.controller");
const JobController = require("./src/controllers/job.controller");
const EmployerController = require("./src/controllers/employer.controller");

app.use(adminController);
app.use(JobCategoryController);
app.use(JobController);
app.use(EmployerController);


app.listen(port, async () => {
    await connect();
    console.log("Listening on port", port);
})

