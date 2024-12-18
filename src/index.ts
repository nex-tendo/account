import express, { Request, Response } from 'express';
import { Logger } from './logger';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

app.listen(process.env.HTTP_PORT, () => {
  Logger.info(`The server was listening on http://localhost:${process.env.HTTP_PORT}`);
});