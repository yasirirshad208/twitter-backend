import mongoose from "mongoose";
import bcrypt from "bcrypt";
import otpGenerator from "otp-generator";
import jwt from "jsonwebtoken"

const UserSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Name is required"],
            trim: true, // Optional: removes whitespace
        },
        email: {
            type: String,
            required: [true, "Email is required"],
            unique: true,
            lowercase: true,
            trim:true, 
            validate: {
                validator: (value) => {
                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    return emailRegex.test(value);
                },
                message: "Valid email is required",
            },
        },
        phone: {
            type: String,
            required: [true, "Phone is required"],
            trim: true, 
        },
        password: {
            type: String,
            required: [true, "Password is required"],
            minlength: [8, "Password must be at least 8 characters"],
            select: false,
        },
        emailVerified: {
            type: Boolean,
            default: false,
        },
        isAdmin: {
            type: Boolean,
            default: false,
        },
        // profilePicture: {
        //     type: String,
        //     default: '', // URL to the profile picture
        // },
        // googleId: {
        //     type: String,
        //     unique: true,
        //     sparse: true, // Allows multiple documents with undefined googleId
        // },
        otp: Number,
        otpExpired: Date,
    },
    {
        timestamps: true,
    }
);

// Method to hash password
UserSchema.methods.hashPassword = async function (password) {
    const saltRounds = 10; // You can adjust this number for more security
    return await bcrypt.hash(password, saltRounds);
};

// Method to compare password
UserSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};

// Generating otp
UserSchema.methods.generateOtp = function () {
    const otp = otpGenerator.generate(6, { upperCaseAlphabets: false, lowerCaseAlphabets: false, specialChars: false });
    this.otp = otp;
    this.otpExpired = Date.now() + 15 * 60 * 1000;
    return otp;
}

// JWT Token
UserSchema.methods.getJWTToken = function(){
    return jwt.sign({id:this._id}, process.env.JWT_SECRET,{
        expiresIn:process.env.JWT_EXPIRE
    });
}

// Pre-save hook to hash password before saving to database
UserSchema.pre("save", async function (next) {
    if (this.isModified("password")) { // Only hash the password if it has been modified
        this.password = await this.hashPassword(this.password);
    }
    next();
});

const User = mongoose.model("User", UserSchema);
export default User;
