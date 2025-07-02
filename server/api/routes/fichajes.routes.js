import express from 'express';
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";
import { isAuth } from '../../authentication/jwt.js';
import { upload, uploadToCloudinary } from '../../middlewares/file.middleware.js';

import { createFichaje, getFichajes } from '../controllers/fichaje.controller.js';

 const fichajesRoutes = express.Router();

 fichajesRoutes.post('/', createFichaje);
 fichajesRoutes.get('/', getFichajes);

export { fichajesRoutes };