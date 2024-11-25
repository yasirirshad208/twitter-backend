import mongoose from "mongoose";

const SubscribeSchema = new mongoose.Schema(
    {
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
    },
    {
        timestamps: true,
    }
);

const Subscribe = mongoose.model("Subscribe", SubscribeSchema);
export default Subscribe;