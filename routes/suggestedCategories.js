import express from 'express';
import upload from '../config/multer.js'; 
import { addSuggestedCategory, updateSuggestedCategory, getSuggestedCategory, getSuggestedCategorySingle } from '../controllers/SuggestedCategory.js';


const router = express.Router();

router.post('/add', upload.single('image'), addSuggestedCategory);
router.put('/update/:id', upload.single('image'), updateSuggestedCategory);
router.get('/all',  getSuggestedCategory);
router.get('/single/:id',  getSuggestedCategorySingle);

export default router;
