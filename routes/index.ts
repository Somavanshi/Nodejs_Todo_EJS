import express from 'express';
import { addTask, deleteItems, listTodo } from '../controllers/HomeController';

// created global routing
export const router = express.Router();

router.get('/', listTodo);
router.post("/create", addTask);
router.post("/delete", deleteItems);

