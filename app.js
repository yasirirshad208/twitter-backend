import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import connectDatabase from "./config/database.js";
import dotenv from "dotenv"
import errorMiddleware from "./middleware/error.js";
import userRoute from "./routes/user.js"
import twitterRoute from "./routes/twitter.js"
import subscribeRoute from "./routes/subscribe.js"
import newsCategoryRoute from "./routes/newsCategory.js"
import suggestedCategoryRoute from "./routes/suggestedCategories.js"
import path from "path";
import { fileURLToPath } from "url";

const app = express();
app.use(bodyParser.json());
app.use(express.json());
app.use(cors())

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(bodyParser.urlencoded({ extended: true }));
dotenv.config({path: "./config/config.env"});
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


connectDatabase()


app.use('/api/user', userRoute);

app.use('/api/news-category', newsCategoryRoute);

app.use('/api/suggested-category', suggestedCategoryRoute);

app.use('/api/twitter', twitterRoute);

app.use('/api/subscribe', subscribeRoute);

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
  });

