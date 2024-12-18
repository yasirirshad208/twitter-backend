import express from "express";
import {
  addSubCategory,
  getAllSubCategories,
  updateSubCategory,
  deleteSubCategory,
  getSubCategory,
  getSubCategoriesOfCat,
} from "../controllers/subCategories.js";
import { authorized } from "../middleware/auth.js";

const router = express.Router();

// Routes
router.post("/add", authorized, addSubCategory);
router.get("/all", getAllSubCategories);
router.get("/all/:catId", getSubCategoriesOfCat);
router.put("/update/:id", authorized, updateSubCategory);
router.get("/:id", getSubCategory);
router.delete("/delete/:id", authorized, deleteSubCategory);

export default router;
