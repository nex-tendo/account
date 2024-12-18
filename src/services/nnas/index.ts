import express from 'express';
import { Logger } from '../../logger';

// ROUTES
import devices from './v1/devices';

const nnas = express.Router();

Logger.info(`[NNAS] Applying routes.`);
nnas.use('/v1/api/devices', devices);

export default nnas;