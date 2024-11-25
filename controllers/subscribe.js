import Subscribe from "../models/Subscribe.js";
import ErrorHandler from "../utils/errorHandler.js";
import ResponseHandler from "../utils/responseHandler.js";


export const subscribe = async(req, res, next)=>{
    const {email} = req.body
    try {

        if (email == '') {
            return next(new ErrorHandler("Email is required", 400));
        }

        email.toLoweCase();

        let subscribe = await Subscribe.findOne({ email });
        if (subscribe) {
            return next(new ErrorHandler("Email already added", 400));
        }

        
        subscribe = new Subscribe({
            email,
        });

        return new ResponseHandler(res, 200, true, "Subscribed Successfully")

    } catch (error) {
        return next(new ErrorHandler(error.message, 500));
    }
}


export const getAllSubscribers = async(req, res, next)=>{
    try {

        
        const subscribers = await Subscribe.find()

        return new ResponseHandler(res, 200, true, "", subscribers)

    } catch (error) {
        return next(new ErrorHandler(error.message, 500));
    }
}