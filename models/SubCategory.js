import mongoose from "mongoose";

const subCategorySchema = new mongoose.Schema({
    categoryId:{
        type:mongoose.Schema.ObjectId,
        ref:"Category",
        required:true
    },
  subCategory: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

export default mongoose.model("SubCategory", subCategorySchema);
