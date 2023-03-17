
const jwt = require("jsonwebtoken");
const User = require("../model/user.model")

const verifyToken = (token) => {
    return new Promise((resolve, reject) => {
        jwt.verify(token, process.env.JWT_SECRET_KEY, (err, payload) => {
            if (err) return reject(err);

            return resolve(payload)
        })
    })
}

const protect = async (req, res, next) => {


    const bearer = req.headers.authorization;

    if (!bearer || !bearer.startsWith("Bearer "))
        return res.status(401).json({
            status: "failed",
            message: "Shivam Singh email or password is not correct",
        });


    const token = bearer.split("Bearer ")[1].trim();
    console.log('token:', token)


    let payload;
    try {
        payload = await verifyToken(token);
    } catch (err) {
        return res.status(500).json({ status: "failed", message: "Something went wrong01" });
    }


    let user;
    try {
        user = User.findById(payload.id).lean().exec();
    } catch (err) {
        return res.status(500).json({ status: "failed", message: "Something went wrong01" });
    }

    if (!user)
        return res.status(401).json({
            status: "failed",
            message: "Shivam email or password is not correct",
        });

    req.user = user;
    next();

}


module.exports = protect

