import express from 'express';
import { addTrend, deleteTrend, search, searchContinuation, tweetDetails, tweetReplies, tweetRepliesContinuation, updateTrend, userDetails, userFollowers, userFollowersContinuation, userFollowing, userFollowingContinuation, userLikes, userLikesContinuation, userTweets, userTweetsContinuation } from '../controllers/twitter.js';
import { authorized } from '../middleware/auth.js';


const router = express.Router();


router.get("/user/details", userDetails);

router.get("/user/tweets", userTweets);

router.get("/user/tweets/continuation", userTweetsContinuation);

router.get("/user/following", userFollowing);

router.get("/user/following/continuation", userFollowingContinuation);

router.get("/user/followers", userFollowers);

router.get("/user/followers/continuation", userFollowersContinuation);

router.get("/user/likes", userLikes);

router.get("/user/likes/continuation", userLikesContinuation);

router.get("/tweet/replies", tweetReplies);

router.get("/tweet/replies/continuation", tweetRepliesContinuation);

router.get("/tweet/details", tweetDetails);

router.get("/search", search);

router.get("/search/continuation", searchContinuation);

router.post("/trend/add", authorized, addTrend);

router.put("/trend/update/:id", authorized, updateTrend);

router.delete("/trend/delete/:id", authorized, deleteTrend);

export default router;