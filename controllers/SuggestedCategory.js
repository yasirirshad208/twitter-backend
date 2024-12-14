import SuggestedCategory from '../models/SuggestedCategories.js'; 
import ErrorHandler from "../utils/errorHandler.js";
import ResponseHandler from "../utils/responseHandler.js";

// Add SuggestedCategory
export const addSuggestedCategory = async (req, res, next) => {
    try {
        const { category, title, description, date, showAtHeader, accounts, chatgptInstructions } = req.body;
        const parsedAccounts = Array.isArray(accounts) ? accounts : accounts.split(',').map(a => a.trim());


        if (!req.file) {
            return next(new ErrorHandler("Image is required.", 400));
        }
        

        const newCategory = new SuggestedCategory({
            title,
            description,
            category,
            date,
            showAtHeader,
            chatgptInstructions,
            accounts:parsedAccounts,
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
        const { title, description, accounts, date, showAtHeader, chatgptInstructions } = req.body;
        const cat = req.body.category

        
        const parsedAccounts = Array.isArray(accounts) ? accounts : accounts.split(',').map(a => a.trim());

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
        category.accounts = parsedAccounts || category.accounts
        category.chatgptInstructions = chatgptInstructions || category.chatgptInstructions

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


// Delete SuggestedCategory
export const deleteSuggestedCategory = async (req, res, next) => {
    try {
        const { id } = req.params;

        const category = await SuggestedCategory.findByIdAndDelete(id);
        if (!category) {
            return next(new ErrorHandler("Suggested category not found.", 404));
        }

        return new ResponseHandler(res, 200, true, "Suggested category deleted successfully!")
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