
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true, minlength: 8 },
        profile_photo_url: [{ type: String, required: true }],
        roles: { type: String, required: true },
    }
)

userSchema.pre("save", function (next) {
    if (!this.isModified("password")) {
        return next();
    }
    bcrypt.hash(this.password, 8, (err, hash) => {
        if (err) {
            return next(err);
        }

        this.password = hash;
        next()
    })
})


userSchema.methods.checkPassword = function (password) {

    const passwordHash = this.password;
    return new Promise((resolve, reject) => {
        bcrypt.compare(password, passwordHash, (err, same) => {
            if (err) return reject(err);
            resolve(same);
        })
    })
}

const User = mongoose.model("user", userSchema);

module.exports = User;

