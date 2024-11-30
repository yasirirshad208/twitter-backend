import mongoose from "mongoose";

const FavouriteSchema = new mongoose.Schema(
    {
        user:{
            type: mongoose.Schema.Types.ObjectId,  // Reference to User schema
            ref: 'User',  // Reference the model name
            required: true
        },
        name:{
            type:String,
            required:true
        },
        username:{
            type:String,
            required:true,
        },
        bio:{
            type:String,
        },
        avatar:{
            type:String,
            required:true,
        },
        twitterId:{
            type:String,
        }
    },
    {
        timestamps: true,
    }
);

const Favourite = mongoose.model("Favourite", FavouriteSchema);
export default Favourite;