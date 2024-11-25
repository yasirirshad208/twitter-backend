import express from 'express';
import upload from '../config/multer.js'; 
import { addNewsCategory, updateNewsCategory, getNewsCategory, getNewsCategorySingle } from '../controllers/newsCategory.js';


const router = express.Router();

router.post('/add', upload.single('image'), addNewsCategory);
router.put('/update/:id', upload.single('image'), updateNewsCategory);
router.get('/all',  getNewsCategory);
router.get('/single/:id',  getNewsCategorySingle);

export default router;
