import mongoose from "mongoose";

const NewsCategorySchema = new mongoose.Schema(
    {
        topic:{
            type:String,
            required:true
        },
        description:{
            type:String,
            required:true
        },
        image:{
            type:String,
            required:true,
        },
    },
    {
        timestamps: true,
    }
);

const NewsCategory = mongoose.model("NewsCategory", NewsCategorySchema);
export default NewsCategory;