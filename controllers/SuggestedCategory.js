import SuggestedCategory from '../models/SuggestedCategories.js'; 
import ErrorHandler from "../utils/errorHandler.js";
import ResponseHandler from "../utils/responseHandler.js";

// Add SuggestedCategory
export const addSuggestedCategory = async (req, res, next) => {
    try {
        const { category, title, description, date, showAtHeader } = req.body;

        if (!req.file) {
            return next(new ErrorHandler("Image is required.", 400));
        }

        const newCategory = new SuggestedCategory({
            title,
            description,
            category,
            date,
            showAtHeader,
            image: req.file.path, // Save the path of the uploaded image
        });

        const savedCategory = await newCategory.save();

        return new ResponseHandler(res, 201, true, "Suggested category added successfully!", savedCategory)

    } catch (error) {
        return next(new ErrorHandler(error.message, 500));
    }
};

// Update SuggestedCategory
export const updateSuggestedCategory = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { title, description, date, showAtHeader } = req.body;
        const cat = req.body.category

        const category = await SuggestedCategory.findById(id);
        if (!category) {
            return next(new ErrorHandler("Suggested category not found.", 404));
        }

        // Update fields
        category.category = cat || category.category;
        category.date = date || category.date;
        category.description = description || category.description;
        category.title = title || category.title;
        category.showAtHeader = showAtHeader || category.showAtHeader

        // If there's a new image, replace the old one
        if (req.file) {
            category.image = req.file.path;
        }

        const updatedCategory = await category.save();
        return new ResponseHandler(res, 200, true, "Suggested category updated successfully!", updatedCategory)
    } catch (error) {
        return next(new ErrorHandler(error.message, 500));
    }
};

export const getSuggestedCategory = async (req, res, next) => {
    try {
        const categories = await SuggestedCategory.find().sort({createdAt: -1});

        if (!categories) {
            return next(new ErrorHandler("Suggested category not found.", 404));
        }

        return new ResponseHandler(res, 200, true, "", categories)
    } catch (error) {
        return next(new ErrorHandler(error.message, 500));
    }
};

export const getSuggestedCategorySingle = async (req, res, next) => {
    try {
        const { id } = req.params;

        const category = await SuggestedCategory.findById(id);

        if (!category) {
            return next(new ErrorHandler("Suggested category not found.", 404));
        }

        return new ResponseHandler(res, 200, true, "", category)
    } catch (error) {
        return next(new ErrorHandler(error.message, 500));
    }
};