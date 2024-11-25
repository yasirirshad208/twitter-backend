import axios from 'axios';
import ResponseHandler from '../utils/responseHandler.js';
import ErrorHandler from '../utils/errorHandler.js';
import Twitter from '../models/Twitter.js';


export const userDetails = async(req, res, next)=>{
    const {username} = req.query
    try {
        const url = `https://${process.env.API_HOST}/user/details`;
        const options = {
            method: 'GET',
            url,
            params: {
                username,
            },
            headers: {
                'x-rapidapi-key': process.env.API_KEY,
                'x-rapidapi-host': process.env.API_HOST
            },
        };

        const response = await axios.request(options);
        const data = await response.data

        return new ResponseHandler(res, 200, true, "", data)
    } catch (error) {
        return next(new ErrorHandler(error.message, 500));
    }
}

export const userTweets = async(req, res, next)=>{
    const {username, limit} = req.query
    try {
        const url = `https://${process.env.API_HOST}/user/tweets`;
        const options = {
            method: 'GET',
            url,
            params: {
                username,
                limit,
                include_replies:true,
                include_pinned:true
            },
            headers: {
                'x-rapidapi-key': process.env.API_KEY,
                'x-rapidapi-host': process.env.API_HOST
            },
        };

        const response = await axios.request(options);
        const data = await response.data

        return new ResponseHandler(res, 200, true, "", data)
    } catch (error) {
        return next(new ErrorHandler(error.message, 500));
    }
}

export const userTweetsContinuation = async(req, res, next)=>{
    const {username, limit, continuation_token} = req.query
    try {
        const url = `https://${process.env.API_HOST}/user/tweets/continuation`;
        const options = {
            method: 'GET',
            url,
            params: {
                username,
                limit,
                continuation_token,
                include_replies:true,
            },
            headers: {
                'x-rapidapi-key': process.env.API_KEY,
                'x-rapidapi-host': process.env.API_HOST
            },
        };

        const response = await axios.request(options);
        const data = await response.data

        return new ResponseHandler(res, 200, true, "", data)
    } catch (error) {
        return next(new ErrorHandler(error.message, 500));
    }
}

export const userFollowing = async(req, res, next)=>{
    const {user_id, limit} = req.query
    try {
        const url = `https://${process.env.API_HOST}/user/following`;
        const options = {
            method: 'GET',
            url,
            params: {
                user_id,
                limit,
            },
            headers: {
                'x-rapidapi-key': process.env.API_KEY,
                'x-rapidapi-host': process.env.API_HOST
            },
        };

        const response = await axios.request(options);
        const data = await response.data

        return new ResponseHandler(res, 200, true, "", data)
    } catch (error) {
        return next(new ErrorHandler(error.message, 500));
    }
}

export const userFollowingContinuation = async(req, res, next)=>{
    const {user_id, limit, continuation_token} = req.query
    try {
        const url = `https://${process.env.API_HOST}/user/following/continuation`;
        const options = {
            method: 'GET',
            url,
            params: {
                user_id,
                limit,
                continuation_token,
            },
            headers: {
                'x-rapidapi-key': process.env.API_KEY,
                'x-rapidapi-host': process.env.API_HOST
            },
        };

        const response = await axios.request(options);
        const data = await response.data

        return new ResponseHandler(res, 200, true, "", data)
    } catch (error) {
        return next(new ErrorHandler(error.message, 500));
    }
}

export const userFollowers = async(req, res, next)=>{
    const {user_id, limit} = req.query
    try {
        const url = `https://${process.env.API_HOST}/user/followers`;
        const options = {
            method: 'GET',
            url,
            params: {
                user_id,
                limit,
            },
            headers: {
                'x-rapidapi-key': process.env.API_KEY,
                'x-rapidapi-host': process.env.API_HOST
            },
        };

        const response = await axios.request(options);
        const data = await response.data

        return new ResponseHandler(res, 200, true, "", data)
    } catch (error) {
        return next(new ErrorHandler(error.message, 500));
    }
}

export const userFollowersContinuation = async(req, res, next)=>{
    const {user_id, limit, continuation_token} = req.query
    try {
        const url = `https://${process.env.API_HOST}/user/followers/continuation`;
        const options = {
            method: 'GET',
            url,
            params: {
                user_id,
                limit,
                continuation_token,
            },
            headers: {
                'x-rapidapi-key': process.env.API_KEY,
                'x-rapidapi-host': process.env.API_HOST
            },
        };

        const response = await axios.request(options);
        const data = await response.data

        return new ResponseHandler(res, 200, true, "", data)
    } catch (error) {
        return next(new ErrorHandler(error.message, 500));
    }
}

export const userLikes = async(req, res, next)=>{
    const {user_id, limit} = req.query
    try {
        const url = `https://${process.env.API_HOST}/user/likes`;
        const options = {
            method: 'GET',
            url,
            params: {
                user_id,
                limit,
            },
            headers: {
                'x-rapidapi-key': process.env.API_KEY,
                'x-rapidapi-host': process.env.API_HOST
            },
        };

        const response = await axios.request(options);
        const data = await response.data

        return new ResponseHandler(res, 200, true, "", data)
    } catch (error) {
        return next(new ErrorHandler(error.message, 500));
    }
}

export const userLikesContinuation = async(req, res, next)=>{
    const {user_id, limit, continuation_token} = req.query
    try {
        const url = `https://${process.env.API_HOST}/user/likes/continuation`;
        const options = {
            method: 'GET',
            url,
            params: {
                user_id,
                limit,
                continuation_token,
            },
            headers: {
                'x-rapidapi-key': process.env.API_KEY,
                'x-rapidapi-host': process.env.API_HOST
            },
        };

        const response = await axios.request(options);
        const data = await response.data

        return new ResponseHandler(res, 200, true, "", data)
    } catch (error) {
        return next(new ErrorHandler(error.message, 500));
    }
}

export const tweetReplies = async(req, res, next)=>{
    const {tweet_id} = req.query
    try {
        const url = `https://${process.env.API_HOST}/tweet/replies`;
        const options = {
            method: 'GET',
            url,
            params: {
                tweet_id,
            },
            headers: {
                'x-rapidapi-key': process.env.API_KEY,
                'x-rapidapi-host': process.env.API_HOST
            },
        };

        const response = await axios.request(options);
        const data = await response.data

        return new ResponseHandler(res, 200, true, "", data)
    } catch (error) {
        return next(new ErrorHandler(error.message, 500));
    }
}

export const tweetRepliesContinuation = async(req, res, next)=>{
    const {tweet_id, continuation_token} = req.query
    try {
        const url = `https://${process.env.API_HOST}/tweet/replies/continuation`;
        const options = {
            method: 'GET',
            url,
            params: {
                tweet_id,
                continuation_token,
            },
            headers: {
                'x-rapidapi-key': process.env.API_KEY,
                'x-rapidapi-host': process.env.API_HOST
            },
        };

        const response = await axios.request(options);
        const data = await response.data

        return new ResponseHandler(res, 200, true, "", data)
    } catch (error) {
        return next(new ErrorHandler(error.message, 500));
    }
}


export const tweetDetails = async(req, res, next)=>{
    const {tweet_id} = req.query
    try {
        const url = `https://${process.env.API_HOST}/tweet/details`;
        const options = {
            method: 'GET',
            url,
            params: {
                tweet_id,
            },
            headers: {
                'x-rapidapi-key': process.env.API_KEY,
                'x-rapidapi-host': process.env.API_HOST
            },
        };

        const response = await axios.request(options);
        const data = await response.data

        return new ResponseHandler(res, 200, true, "", data)
    } catch (error) {
        return next(new ErrorHandler(error.message, 500));
    }
}

export const search = async(req, res, next)=>{
    const {query, limit, start_date, end_date} = req.query
    try {
        const url = `https://${process.env.API_HOST}/tweet/search`;
        const options = {
            method: 'GET',
            url,
            params: {
                query,
                limit,
                section:"top",
                start_date,
                end_date
            },
            headers: {
                'x-rapidapi-key': process.env.API_KEY,
                'x-rapidapi-host': process.env.API_HOST
            },
        };

        const response = await axios.request(options);
        const data = await response.data

        return new ResponseHandler(res, 200, true, "", data)
    } catch (error) {
        return next(new ErrorHandler(error.message, 500));
    }
}

export const searchContinuation = async(req, res, next)=>{
    const {query, limit, start_date, end_date, continuation_token} = req.query
    try {
        const url = `https://${process.env.API_HOST}/tweet/search/continuation`;
        const options = {
            method: 'GET',
            url,
            params: {
                query,
                limit,
                section:"top",
                start_date,
                end_date,
                continuation_token
            },
            headers: {
                'x-rapidapi-key': process.env.API_KEY,
                'x-rapidapi-host': process.env.API_HOST
            },
        };

        const response = await axios.request(options);
        const data = await response.data

        return new ResponseHandler(res, 200, true, "", data)
    } catch (error) {
        return next(new ErrorHandler(error.message, 500));
    }
}

export const addTrend = async(req, res, next)=>{
    const {trend} = req.body
    try {
        if(trend==''){
            return next(new ErrorHandler("Trend is required", 400));
        }

       trend.toLowerCase()

        let twitter = await Twitter.findOne({ trend });
        if (twitter) {
            return next(new ErrorHandler("Trend already added", 400));
        }

        twitter = new Twitter({
            trend,
        });

        await twitter.save();

        return new ResponseHandler(res, 200, true, "Trend added Successfully", twitter)
    } catch (error) {
        return next(new ErrorHandler(error.message, 500));
    }
}

export const updateTrend = async(req, res, next)=>{
    const {trend} = req.body
    const {id} = req.params
    try {
        if(trend==''){
            return next(new ErrorHandler("Trend is required", 400));
        }

       trend.toLowerCase()

        const twitter = await Twitter.findById(id);

        if (!twitter) {
            return next(new ErrorHandler("Trend not found", 404));
        }

        twitter.trend = trend

        await twitter.save();

        return new ResponseHandler(res, 200, true, "Trend updated Successfully", {trend})
    } catch (error) {
        return next(new ErrorHandler(error.message, 500));
    }
}

export const deleteTrend = async(req, res, next)=>{
    const {id} = req.params
    try {

        const twitter = await Twitter.findByIdAndDelete(id);

        if (!twitter) {
            return next(new ErrorHandler("Trend not found", 404));
        }

        return new ResponseHandler(res, 200, true, "Trend deleted Successfully")

    } catch (error) {
        return next(new ErrorHandler(error.message, 500));
    }
}