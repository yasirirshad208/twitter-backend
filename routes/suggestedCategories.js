import express from 'express';
import upload from '../config/multer.js'; 
import { addSuggestedCategory, updateSuggestedCategory, getSuggestedCategory, getSuggestedCategorySingle, deleteSuggestedCategory } from '../controllers/SuggestedCategory.js';
import { authorized } from '../middleware/auth.js';


const router = express.Router();

router.post('/add', upload.single('image'), authorized,addSuggestedCategory);
router.put('/update/:id', upload.single('image'), authorized,updateSuggestedCategory);
router.get('/all',  getSuggestedCategory);
router.get('/single/:id',  getSuggestedCategorySingle);
router.delete('/delete/:id',  authorized ,deleteSuggestedCategory);

export default router;
