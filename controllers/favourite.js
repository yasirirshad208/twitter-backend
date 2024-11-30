
import Favourite from "../models/Fav.js"
import ErrorHandler from "../utils/errorHandler.js";
import ResponseHandler from "../utils/responseHandler.js";



export const addFavourite = async(req, res, next)=>{
    try {
        const {name, avatar, username, twitterId, bio } = req.body

    let favourite = await Favourite.findOne({username, user:req.user._id});

    if(favourite){
        return next(new ErrorHandler("User already added to favourite", 401));
    }

     favourite = new Favourite({
        user:req.user._id,
        name,
        username,
        avatar,
        twitterId,
        bio
     })

     await favourite.save()
     return new ResponseHandler(res, 201, true, `User added to favourites`, favourite)
    } catch (error) {
        return next(new ErrorHandler(error.message, 500));
    }

}


export const deleteFavourite = async (req, res, next) => {
    try {
        const { username } = req.params;  // Assuming username is passed in the URL parameters

        // Check if the favourite exists
        const favourite = await Favourite.findOneAndDelete({
            username,
            user: req.user._id,  // Ensure it's the correct user's favourite
        });

        if (!favourite) {
            return next(new ErrorHandler("Favourite not found", 404));
        }

        return new ResponseHandler(res, 200, true, "User removed from favourites", favourite);
    } catch (error) {
        return next(new ErrorHandler(error.message, 500));
    }
};

export const getAllFavourites = async (req, res, next) => {
    try {
        // Find all favourites for the logged-in user
        const favourites = await Favourite.find({ user: req.user._id }).sort({createdAt:-1});  // Query by userId

        if (favourites.length === 0) {
            return next(new ErrorHandler("No favourites found", 404));
        }

        return new ResponseHandler(res, 200, true, "Fetched all favourites", favourites);
    } catch (error) {
        return next(new ErrorHandler(error.message, 500));
    }
};