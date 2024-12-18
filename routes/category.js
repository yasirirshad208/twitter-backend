import express from "express";
import {
  addCategory,
  updateCategory,
  deleteCategory,
  getAllCategories,
  getCategory,
} from "../controllers/category.js";
import { authorized } from "../middleware/auth.js";

const router = express.Router();

// Routes
router.post("/add", authorized, addCategory);
router.put("/update/:id", authorized, updateCategory);
router.delete("/delete/:id", authorized, deleteCategory);
router.get("/all", getAllCategories);
router.get("/:id", getCategory);

export default router;
