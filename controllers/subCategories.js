import SubCategory from "../models/SubCategory.js"; // Adjust path accordingly

// Add a SubCategory
export const addSubCategory = async (req, res) => {
  try {
    const { categoryId, subCategory } = req.body;

    // Validate inputs
    if (!categoryId || !subCategory) {
      return res.status(400).json({ message: "Category and subCategory are required." });
    }

    // Create and save new sub-category
    const newSubCategory = await SubCategory.create({
        categoryId,
      subCategory,
    });

    return res.status(201).json({ message: "SubCategory added successfully.", data: newSubCategory });
  } catch (error) {
    return res.status(500).json({ message: "Error adding SubCategory.", error: error.message });
  }
};

// Get All SubCategories
export const getAllSubCategories = async (req, res) => {
  try {
    const subCategories = await SubCategory.find().populate("categoryId").sort({createdAt: -1}); // Adjust "name" based on your Category schema
    return res.status(200).json({ data: subCategories });
  } catch (error) {
    return res.status(500).json({ message: "Error fetching SubCategories.", error: error.message });
  }
};

export const getSubCategoriesOfCat = async (req, res) => {
    try {
      const subCategories = await SubCategory.find({categoryId:req.params.catId}).populate("categoryId").sort({createdAt: -1}); // Adjust "name" based on your Category schema
      return res.status(200).json({ data: subCategories });
    } catch (error) {
      return res.status(500).json({ message: "Error fetching SubCategories.", error: error.message });
    }
  };

export const getSubCategory = async (req, res) => {
    try {
      const subCategories = await SubCategory.findById(req.params.id); // Adjust "name" based on your Category schema
      return res.status(200).json({ data: subCategories });
    } catch (error) {
      return res.status(500).json({ message: "Error fetching SubCategories.", error: error.message });
    }
  };


// Update a SubCategory
export const updateSubCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const { categoryId, subCategory } = req.body;

    // Find and update sub-category
    const updatedSubCategory = await SubCategory.findByIdAndUpdate(
      id,
      { categoryId, subCategory },
      { new: true, runValidators: true }
    );

    if (!updatedSubCategory) {
      return res.status(404).json({ message: "SubCategory not found." });
    }

    return res.status(200).json({ message: "SubCategory updated successfully.", data: updatedSubCategory });
  } catch (error) {
    return res.status(500).json({ message: "Error updating SubCategory.", error: error.message });
  }
};

// Delete a SubCategory
export const deleteSubCategory = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedSubCategory = await SubCategory.findByIdAndDelete(id);

    if (!deletedSubCategory) {
      return res.status(404).json({ message: "SubCategory not found." });
    }

    return res.status(200).json({ message: "SubCategory deleted successfully." });
  } catch (error) {
    return res.status(500).json({ message: "Error deleting SubCategory.", error: error.message });
  }
};
