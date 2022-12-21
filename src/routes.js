
import { Router } from 'express';
import multer from 'multer';

import uploadConfig from './config/uploads'

import SessionController from './controllers/SessionController';
import HouseController from './controllers/HouseController';

const router = Router();

const upload = multer(uploadConfig)

router.post('/session', SessionController.store)
router.post('/houses', upload.single('thumbnail'), HouseController.store)
router.get('/houses', HouseController.index)
router.put('/houses/:house_id', upload.single('thumbnail'), HouseController.update)

export default router;