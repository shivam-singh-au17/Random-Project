
const express = require("express");

const connect = require("./configs/db");

const { signup, signin } = require("./controller/auth.controller")
const userController = require("./controller/user.controller")
const productController = require("./controller/product.controller")
const lectureController = require("./controller/lecture.contoller")

const app = express();

app.use(express.json());
app.use("/lecturePro", productController);
app.use("/", lectureController);

app.post("/users", signup);
app.post("/signin", signin);

app.use("/allUser", userController)

app.listen(3333, async () => {
    // RUN THE CONNECT FUNCTION
    await connect();
    console.log("Listening on port 3333");
})



