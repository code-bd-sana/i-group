import { Router } from "express";
import { UserLogin, UserRegister, userUpdate } from "../controller/userController.js";

const router = Router();

router.post('/register', UserRegister);
router.post('/login/', UserLogin);
router.put('/update/:id', userUpdate);

export default router;