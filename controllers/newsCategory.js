import NewsCategory from '../models/NewsCategory.js'; 
import ErrorHandler from "../utils/errorHandler.js";
import ResponseHandler from "../utils/responseHandler.js";

// Add NewsCategory
export const addNewsCategory = async (req, res, next) => {
    try {
        const { topic, description } = req.body;

        if (!req.file) {
            return next(new ErrorHandler("Image is required.", 400));
        }

        const newCategory = new NewsCategory({
            topic,
            description,
            image: req.file.path, // Save the path of the uploaded image
        });

        const savedCategory = await newCategory.save();

        return new ResponseHandler(res, 201, true, "News category added successfully!", savedCategory)

    } catch (error) {
        return next(new ErrorHandler(error.message, 500));
    }
};

// Update NewsCategory
export const updateNewsCategory = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { topic, description } = req.body;

        const category = await NewsCategory.findById(id);
        if (!category) {
            return next(new ErrorHandler("News category not found.", 404));
        }

        // Update fields
        category.topic = topic || category.topic;
        category.description = description || category.description;

        // If there's a new image, replace the old one
        if (req.file) {
            category.image = req.file.path;
        }

        const updatedCategory = await category.save();
        return new ResponseHandler(res, 200, true, "News category updated successfully!", updatedCategory)
    } catch (error) {
        return next(new ErrorHandler(error.message, 500));
    }
};

export const getNewsCategory = async (req, res, next) => {
    try {
     

       

        const categories = await NewsCategory.find();

        if (!categories) {
            return next(new ErrorHandler("News category not found.", 404));
        }

        return new ResponseHandler(res, 200, true, "", categories)
    } catch (error) {
        return next(new ErrorHandler(error.message, 500));
    }
};

export const getNewsCategorySingle = async (req, res, next) => {
    try {
        const { id } = req.params;

       

        const category = await NewsCategory.findById(id);

        if (!category) {
            return next(new ErrorHandler("News category not found.", 404));
        }

        return new ResponseHandler(res, 200, true, "", category)
    } catch (error) {
        return next(new ErrorHandler(error.message, 500));
    }
};