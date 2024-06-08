import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please Provide a username"],
        unique: true,
    },
    email: {
        type: String,
        required: [true, "Please Provide a Email"],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "Please Provide a password"],
    },
    isVerified: {
        type: Boolean,
        default: false,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    forgotPasswordToken: String,
    forgotPasswordTokenExpire: Date,
    verifyToken: String,
    verifyTokenExpire: Date,

})

const User = mongoose.model.users || mongoose.model("users", userSchema);

export default User;

