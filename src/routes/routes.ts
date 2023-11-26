import CustomError from '../utils/CustomError';
import { Router } from 'express';

const router = Router();
const path = '/api';

// Routes:
// router.use(path, (req, res, next) => {
//     return next(new CustomError('sas', 400));
// });
// don't forget about router as second parametr in use ^

export default router;
