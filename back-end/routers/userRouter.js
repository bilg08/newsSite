import express from 'express';
import {userController} from '../controllers/userController'
const router = express.Router();

router.post("/users/register", userController.createNewUser);
export default router; 