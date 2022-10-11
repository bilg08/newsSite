import express from 'express';
import {userController} from '../controllers/userController'
const router = express.Router();

router.post("/users/", userController.createNewUser);
export default router; 