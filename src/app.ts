import express, { json } from 'express';

import cookieParser from 'cookie-parser';
import cors from 'cors';
import { errorHandler } from './middlewares/errorHandlerMw';
import router from './routes/routes';

export const app = express();

app.use(json());

app.use(
    cors({
        credentials: true,
        origin: process.env.URL,
    }),
);
app.use(cookieParser());

app.use('/', router);

app.use(errorHandler);
