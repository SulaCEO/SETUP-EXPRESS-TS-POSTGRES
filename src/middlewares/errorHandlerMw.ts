import { NextFunction, Request, Response } from 'express';

import CustomError from '../utils/CustomError';

export const errorHandler = (err: CustomError, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof CustomError) {
        res.status(err.status).json({ message: err.message });
    }

    res.status(500).json({ message: 'Something went wrong. Please try again.' });
};
