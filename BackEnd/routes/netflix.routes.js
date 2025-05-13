import {Router} from 'express';

import { createActor, deleteActor, getActor, getActores, updateActor } from '../controllers/netflix.controllers.js';

const router = Router();

router.get('/actores', getActores);

router.get('/actores/:id', getActor);

router.post('/actores', createActor);

router.delete('/actores/:id', deleteActor);

router.put('/actores/:id', updateActor);


export default router;