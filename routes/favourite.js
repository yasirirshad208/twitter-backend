import express from 'express';
import { isAuthenticated } from '../middleware/auth.js';
import { addFavourite, deleteFavourite, getAllFavourites } from '../controllers/favourite.js';

const router = express.Router();

router.post('/add', isAuthenticated, addFavourite);  // Add favourite
router.delete('/delete/:username', isAuthenticated, deleteFavourite);  // Delete favourite by username
router.get('/get', isAuthenticated, getAllFavourites); 

export default router