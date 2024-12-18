import axios from 'axios';
import ResponseHandler from '../utils/responseHandler.js';
import ErrorHandler from '../utils/errorHandler.js';
import Twitter from '../models/Twitter.js';
import SuggestedCategory from '../models/SuggestedCategories.js';

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
                include_replies:false ,
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
    const {query, start_date, } = req.query
    try {
        const url = `https://${process.env.API_HOST}/search/search`;
        const options = {
            method: 'GET',
            url,
            params: {
                query,
                section:"top",
                start_date,
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



export const getTwitterTrends = async (req, res, next) => {
    try {
        const trendsUrl = `https://${process.env.API_HOST}/trends/`;
        const trendsOptions = {
            method: 'GET',
            url: trendsUrl,
            params: {
                woeid: 1, // Worldwide trends
            },
            headers: {
                'x-rapidapi-key': process.env.API_KEY,
                'x-rapidapi-host': process.env.API_HOST
            },
        };

        const trendsResponse = await axios.request(trendsOptions);
        const data = trendsResponse.data;

        // Function to check if the trend name is in English
        const isEnglish = (text) => /^[A-Za-z0-9\s#]+$/.test(text);

        // Filter trends that are in English
        const englishTrends = data[0].trends.filter((trend) => isEnglish(trend.name));

        // Get first three trends
        const topThreeTrends = englishTrends.slice(0, 3);

        // Get today's date in YYYY-MM-DD format
        const today = new Date();
        today.setDate(today.getDate() - 1); // Subtract 1 day
        const startDate = today.toISOString().split('T')[0]; // Format as YYYY-MM-DD

        // Fetch media URLs and text for each trend
        const mediaPromises = topThreeTrends.map(async (trend) => {
            try {
                const query = trend.name;
                const searchUrl = `https://${process.env.API_HOST}/search/search`;
                const searchOptions = {
                    method: 'GET',
                    url: searchUrl,
                    params: {
                        query,
                        section: "top",
                        start_date: startDate,
                    },
                    headers: {
                        'x-rapidapi-key': process.env.API_KEY,
                        'x-rapidapi-host': process.env.API_HOST
                    },
                };

                const searchResponse = await axios.request(searchOptions);
                const searchData = searchResponse.data.results;

                // Ensure searchData is an array before filtering
                if (Array.isArray(searchData)) {
                    // Filter out trends without media URLs
                    const validResults = searchData.filter(result => 
                        result.media_url && Array.isArray(result.media_url) && result.media_url.length > 0
                    );

                    let mediaUrl = null;
                    let text = null;

                    if (validResults.length > 0) {
                        const firstValidResult = validResults[0];
                        mediaUrl = firstValidResult.media_url.find(url => url) || null; // Get the first valid URL
                        text = firstValidResult.text || null; // Capture the text
                    }

                    return {
                        trend: trend.name,
                        media_url: mediaUrl, // Return the media URL or null if not found
                        text: text, // Return the text or null if not found
                    };
                } else {
                    // If searchData is not an array, log and return null for this trend
                    console.log(`No media data found for trend "${trend.name}"`);
                    return {
                        trend: trend.name,
                        media_url: null, // No valid media URL for this trend
                        text: null, // No valid text for this trend
                    };
                }
            } catch (searchError) {
                console.error(`Error fetching media for trend "${trend.name}":`, searchError.message);
                return {
                    trend: trend.name,
                    media_url: null, // If error occurs, return null
                    text: null, // If error occurs, return null
                };
            }
        });

        // Wait for all media fetches to complete
        const mediaData = await Promise.all(mediaPromises);

        // Filter out trends with `null` media URLs and text until we have exactly three
        let validTrends = mediaData.filter(trend => trend.media_url !== null && trend.text !== null);

        while (validTrends.length < 3 && englishTrends.length > 0) {
            const nextTrend = englishTrends.find(trend => !mediaData.some(t => t.trend === trend.name && t.media_url !== null && t.text !== null));
            if (nextTrend) {
                const query = nextTrend.name;
                const searchUrl = `https://${process.env.API_HOST}/search/search`;
                const searchOptions = {
                    method: 'GET',
                    url: searchUrl,
                    params: {
                        query,
                        section: "top",
                        start_date: startDate,
                    },
                    headers: {
                        'x-rapidapi-key': process.env.API_KEY,
                        'x-rapidapi-host': process.env.API_HOST
                    },
                };

                const searchResponse = await axios.request(searchOptions);
                const searchData = searchResponse.data.results;

                // Ensure searchData is an array before filtering
                if (Array.isArray(searchData)) {
                    const validResults = searchData.filter(result => 
                        result.media_url && Array.isArray(result.media_url) && result.media_url.length > 0
                    );

                    if (validResults.length > 0) {
                        const firstValidResult = validResults[0];
                        validTrends.push({
                            trend: nextTrend.name,
                            media_url: firstValidResult.media_url.find(url => url) || null,
                            text: firstValidResult.text || null,
                        });
                    }
                }
            }
        }

        const finalTrends = validTrends.slice(0, 3); // Limit to exactly three trends
        return new ResponseHandler(res, 200, true, "", finalTrends);
    } catch (error) {
        console.error("Error fetching Twitter trends:", error.message);
        return next(new ErrorHandler(error.message, 500));
    }
};

export const aiArticle = async (req, res, next) => {
    const { id } = req.body;
  
    try {
      // Validate inputs
      if (!id) {
        return next(new ErrorHandler("Category is required", 400));
      }

      const cat = await SuggestedCategory.findById(id);

      if (cat.articleTime) {
        const currentTime = new Date();
        const oneHourAgo = new Date(currentTime - 60 * 60 * 1000); // 1 hour in milliseconds
    
        
        if (cat.articleTime > oneHourAgo) {
            return res.status(200).json({
                article: cat.article,
                images: cat.articleImages,
              }); 
        }
      }

  const accounts = cat.accounts

      const combinedText = [];
      const combinedImages = [];
  
      // Fetch tweets for each account
      for (const username of accounts) {
        const url = `https://${process.env.API_HOST}/user/tweets`;
        const options = {
          method: 'GET',
          url,
          params: {
            username,
            limit: 5,
            include_replies: true,
            include_pinned: true,
          },
          headers: {
            'x-rapidapi-key': process.env.API_KEY,
            'x-rapidapi-host': process.env.API_HOST,
          },
        };
  
        const response = await axios.request(options);
        const tweets = response.data.results || [];
  
        // Filter tweets by category
        const filteredTweets = tweets.filter((tweet) =>
          tweet.text.toLowerCase()
        // .includes(category.toLowerCase())
        );
  
        // Extract text and images
        filteredTweets.forEach((tweet) => {
          combinedText.push(tweet.text);
          if (tweet.media_url && tweet.media_url.length > 0) {
            combinedImages.push(...tweet.media_url.map((media) => media));
          }
        });
      }
  
      // Limit to 5 images
      const selectedImages = combinedImages.slice(0, 5);

      const cText = combinedText.filter(line => line.trim() !== '').join('\n');


   
      const textPayload = cText.replace(/["']/g, '');

    const url = `https://chatgpt-vision1.p.rapidapi.com/gpt4`;
        const options = {
          method: 'POST',
          url,
          headers: {
            'x-rapidapi-key': process.env.GPT_KEY,
            'x-rapidapi-host': 'chatgpt-vision1.p.rapidapi.com',
            'Content-Type': 'application/json'
          },
          data:{
            messages: [
                {
                  role: "user",
                  content: `${cat.chatgptInstructions}. Make multiple headings and paragraphs give html code in h2 an p tags:  ${textPayload}`,
                },
              ],
              web_access:false
          }
        };
  
        const response = await axios.request(options);
  
      const generatedArticle = response.data.result; 

  cat.article = generatedArticle.replace("```html", "")
  cat.articleImages = selectedImages
cat.articleTime = new Date()
  await cat.save()
      // Send response to user
      return res.status(200).json({
        article: generatedArticle.replace("```html", ""),
        images: selectedImages,
      });
    } catch (error) {
      return next(new ErrorHandler(error.message, 500));
    }
  };









