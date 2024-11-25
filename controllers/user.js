import User from '../models/User.js';
import sendEmail from '../utils/sendEmail.js';
import ErrorHandler from '../utils/errorHandler.js';
import ResponseHandler from '../utils/responseHandler.js';
import sendToken from '../utils/sendToken.js';
import jwt from 'jsonwebtoken'


export const registerUser = async (req, res, next) => {
    const {name, email, password, confirmPassword, phone } = req.body;

    try {

        if(password=='' || confirmPassword=='' || name==''){
            return next(new ErrorHandler("All fields are required", 400));
        }
       
        let user = await User.findOne({ email });
        if (user) {
            return next(new ErrorHandler("User already registered", 400));
        }

        if (password !== confirmPassword) {
            return next(new ErrorHandler("Password and Confirm Password don't match", 400));
        }

        
        user = new User({
            name,
            email,
            password,
            phone,
        });

        const otp = user.generateOtp();

        await user.save();

        const message =`Your OTP for Twitter verification is ${otp}. It will expire in 15 minutes.\n\n If you have not requested this mail then please ignore it`;

        await sendEmail({
            email: user.email,
            subject: 'Twitter Email Verification',
            message
        });

        return new ResponseHandler(res, 201, true, `Verification otp has sent to ${user.email} successfully`, {
            name,
            email,
        })

    } catch (error) {
        return next(new ErrorHandler(error.message, 500));
    }
};

export const sendOtp = async(req, res, next)=>{
    try {
        const {email} = req.body;
        const user = await User.findOne({email});

        if(!user){
            return next(new ErrorHandler("User not found", 401))
        }

        const otp = user.generateOtp();

        await user.save();

        const message =`Your OTP for Twitter verification is ${otp}. It will expire in 15 minutes.\n\n If you have not requested this mail then please ignore it`;


        await sendEmail({
            email: user.email,
            subject: 'Twitter Email Verification',
            message
        });

        return new ResponseHandler(res, 200, true, `Verification otp has sent to ${user.email} successfully`)

    } catch (error) {
        return next(new ErrorHandler("Server Error", 500));
    }
}

// verify otp
export const verifyOtp = async(req, res, next)=>{
    try {
        const {otp} = req.body;

        if(!otp){
            return next(new ErrorHandler("Otp is required", 400));
        }

        const user = await User.findOne({
            otp,
            otpExpired: {$gt:Date.now()}
        })
        if(!user){
            return next(new ErrorHandler("Otp is invalid or has been expired", 400));
        }

        user.emailVerified=true,
        user.otp=undefined,
        user.otpExpired=undefined

        await user.save()

        sendToken(user, 201, res)
    } catch (error) {
        return next(new ErrorHandler(error, 500));
    }
}

// Login
export const login = async (req,res,next)=>{

    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email}).select('+password').select('+emailVerified');

        if(!user){
            return next(new ErrorHandler("Invalid credentials", 401))
        }

        const isMatchPassword = await user.comparePassword(password);

        if (!isMatchPassword) {
            return next(new ErrorHandler("Invalid Credentials", 401));
        }

        if(user.emailVerified === false){
            const otp = user.generateOtp();

            await user.save({validateBeforeSave:false});

            const message =`Your OTP for Twitter verification is ${otp}. It will expire in 15 minutes.\n\n If you have not requested this mail then please ignore it`;


            await sendEmail({
                email: user.email,
                subject: 'Twitter Email Verification',
                message
            });

            return next(new ErrorHandler(`Email verification otp has sent to ${user.email}. Please verify it first`, 401));
        }

        sendToken(user, 201, res)
    } catch (error) {
        return next(new ErrorHandler(error, 500));
    }
}

// Reset password
export const resetPassword = async (req, res, next) => {
    try {
        const { email, password, confirmPassword } = req.body;

        const user = await User.findOne({ email }).select('+password');

        if (!user) {
            return next(new ErrorHandler("User not found", 401));
        }

        if (password !== confirmPassword) {
            return next(new ErrorHandler("Password and Confirm Password don't match", 400));
        }

        // Hash the new password
        user.password = password;
        user.otp = undefined;
        user.otpExpired = undefined;

        await user.save();
        
        sendToken(user, 200, res);
    } catch (error) {
        return next(new ErrorHandler("Server error", 500));
    }
};

export const updateUserPassword = async(req,res,next)=>{
    const { email, password, newPassword, confirmPassword } = req.body;
    try {
        const user = await User.findOne({ email }).select('+password');

        if (!user) {
            return next(new ErrorHandler("User not found", 401));
        }
        
        const isMatchPassword = await user.comparePassword(password);

        if (!isMatchPassword) {
            return next(new ErrorHandler("Invalid Old Password", 401));
        }

        if (newPassword !== confirmPassword) {
            return next(new ErrorHandler("Passwords don't match", 400));
        }

        user.password = newPassword

        return new ResponseHandler(res, 200, true, `Password updated Successfully`)

    } catch (error) {
        return next(new ErrorHandler(error.message, 500)); 
    }
}

export const verifyToken = async(req,res,next)=>{
    const { token } = req.body;
    try {
        if (!token) {
            return next(new ErrorHandler("Please Login to access this resource", 401));
          }
        
          const decodedData = jwt.verify(token, process.env.JWT_SECRET);
        
          const user = await User.findById(decodedData.id);

        return new ResponseHandler(res, 200, true, `Token is valid`)

    } catch (error) {
        return next(new ErrorHandler(error.message, 500));
    }
}

export const getAllUsers = async(req,res,next)=>{
    try {
        const users = await User.find()

        if(!users){
            return next(new ErrorHandler("Users not found", 404));
        }

        return new ResponseHandler(res, 200, true, `Users list found`, users)

    } catch (error) {
        return next(new ErrorHandler(error.message, 500));
    }
}

export const updateAdminStatus = async(req,res,next)=>{
    const {id} = req.params
    try {
        const user = await User.findById(id)

        if(!user){
            return next(new ErrorHandler("User not found", 404));
        }

        user.isAdmin = !user.isAdmin;

        await user.save();

        return new ResponseHandler(res, 200, true, `Status updated`)

    } catch (error) {
        return next(new ErrorHandler(error.message, 500));
    }
}