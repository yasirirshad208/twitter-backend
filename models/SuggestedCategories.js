import mongoose from "mongoose";

const SugeestedCategorySchema = new mongoose.Schema(
    {
        category:{
            type:String,
            required:true
        },
        title:{
            type:String,
            required:true,
        },
        description:{
            type:String,
            required:true
        },
        image:{
            type:String,
            required:true,
        },
        date:{
            type:Date,
            required:true
        },
        showAtHeader:{
            type:Boolean,
            required:true,
            default:false
        }
    },
    {
        timestamps: true,
    }
);

const NewsCategory = mongoose.model("SuggestedCategory", SugeestedCategorySchema);
export default NewsCategory;