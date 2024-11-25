import express from 'express';
import { authorized } from '../middleware/auth.js';
import { getAllSubscribers, subscribe } from '../controllers/subscribe.js';


const router = express.Router();

router.post("/email", subscribe)

router.get("/subscribers/all", authorized, getAllSubscribers)

export default router;