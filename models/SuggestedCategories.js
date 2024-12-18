import mongoose, { Mongoose } from "mongoose";

const SugeestedCategorySchema = new mongoose.Schema(
    {
        categoryId:{
            type:mongoose.Schema.ObjectId,
            ref:"Category",
            required:true
        },
        subCategory:{
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
        chatgptInstructions:{
            type:String,
            required:true
        },
        article:{
            type:String,
        },
        articleTime:{
            type:Date,
        },
        articleImages:{
            type:[String]
        },
        accounts:{
            type:[String],
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

const SuggestedCategory = mongoose.model("SuggestedCategory", SugeestedCategorySchema);
export default SuggestedCategory;