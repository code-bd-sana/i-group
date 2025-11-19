import { Router } from "express";
import { sendOtp } from "../controller/otpController.js";

const router = Router();
router.post('/send', sendOtp)
export default router