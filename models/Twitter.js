import mongoose from "mongoose";

const TwitterSchema = new mongoose.Schema(
    {
        trend:{
            type:String,
            required:true
        },
    },
    {
        timestamps: true,
    }
);

const Twitter = mongoose.model("Twitter", TwitterSchema);
export default Twitter;