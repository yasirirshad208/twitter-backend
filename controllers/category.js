import Category from "../models/Category.js"; // Import the Category model

// Add Category
export const addCategory = async (req, res) => {
  try {
    const { category } = req.body;

    // Check if category is valid
    if (!category || category.trim() === "") {
      return res.status(400).json({ message: "Category name is required" });
    }


    // Check if category already exists
    const existingCategory = await Category.findOne({ category });
    if (existingCategory) {
      return res.status(400).json({ message: "Category already exists" });
    }

    // Create new category
    const newCategory = new Category({
      category: category.trim(), // Trim whitespace
    });

    await newCategory.save();

    res.status(201).json({
      success: true,
      message: "Category added successfully",
      category: newCategory,
    });
  } catch (error) {
    console.error("Error adding category:", error); // Add detailed logging
    res.status(500).json({ message: "Failed to add category", error: error.message });
  }
};


// Update Category
export const updateCategory = async (req, res) => {
  try {
    const { id } = req.params; // Category ID
    const { category } = req.body;

    // Find and update the category
    const updatedCategory = await Category.findByIdAndUpdate(
      id,
      { category },
      { new: true, runValidators: true }
    );

    if (!updatedCategory) {
      return res.status(404).json({ message: "Category not found" });
    }

    res.status(200).json({
      success: true,
      message: "Category updated successfully",
      category: updatedCategory,
    });
  } catch (error) {
    res.status(500).json({ message: "Failed to update category", error: error.message });
  }
};

// Delete Category
export const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params; // Category ID

    const deletedCategory = await Category.findByIdAndDelete(id);

    if (!deletedCategory) {
      return res.status(404).json({ message: "Category not found" });
    }

    res.status(200).json({
      success: true,
      message: "Category deleted successfully",
    });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete category", error: error.message });
  }
};

// Get All Categories
export const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find().sort({createdAt: -1});

    res.status(200).json({
      success: true,
      message: "Categories fetched successfully",
      categories,
    });
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch categories", error: error.message });
  }
};

export const getCategory = async (req, res) => {
    try {
      const categories = await Category.findById(req.params.id);
  
      res.status(200).json({
        success: true,
        message: "Categories fetched successfully",
        data:categories,
      });
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch categories", error: error.message });
    }
  };