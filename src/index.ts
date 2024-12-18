import express, { Request, Response } from 'express';
import { Logger } from './logger';
import dotenv from 'dotenv';
dotenv.config();

// ROUTES
import nnas from './services/nnas';

const app = express();

app.use(express.json());
app.use(express.urlencoded({
	extended: true
}));

app.use(nnas);

app.listen(process.env.HTTP_PORT, () => {
  Logger.info(`The server was listening on http://localhost:${process.env.HTTP_PORT}`);
});