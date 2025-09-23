import { Router } from 'express';
import { list, detail, createOne, updateOne, deleteOne } from '../controllers/resources.controller.js';

const router = Router();

router.get('/:resource', list);
router.get('/:resource/:id', detail);

// NUEVO:
router.post('/:resource', createOne);          // create
router.put('/:resource/:id', updateOne);       // full update
router.patch('/:resource/:id', updateOne);     // partial update
router.delete('/:resource/:id', deleteOne);    // delete

export default router;
