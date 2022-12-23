
import { Router } from 'express';
import multer from 'multer';

import uploadConfig from './config/uploads'

import SessionController from './controllers/SessionController';
import HouseController from './controllers/HouseController';

import DashboardController from './controllers/DashboardController';

import ReserveController from './controllers/ReserveController';

const router = Router();

const upload = multer(uploadConfig)

router.post('/session', SessionController.store)
router.post('/houses', upload.single('thumbnail'), HouseController.store)
router.get('/houses', HouseController.index)
router.put('/houses/:house_id', upload.single('thumbnail'), HouseController.update)
router.delete('/houses', HouseController.destroy)

router.get('/dashboard', DashboardController.show)

router.post('/reserve/:house_id/reserve', ReserveController.store)
router.get('/reserve', ReserveController.index)
router.delete('/reserve/cancel', ReserveController.destroy)

export default router;