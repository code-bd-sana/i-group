import {Router} from 'express'
import userRoute from './UserRoute.js'
import otpRoute from './otpRoute.js'
const router = Router();


export default router;
router.use('/user', userRoute);
router.use('/otp', otpRoute);


router.get('/', (req, res) => {
  return res.status(200).json({ message: 'High Tech Server Running successfully!' });
});


