import express from 'express';

const router = express.Router();
import { createUser, getUsers, getUserById, updateUser, deleteUser } from '../controllers/userControllers.js';

router.post('/', createUser);       // POST /api/v1/users
router.get('/', getUsers);          // GET /api/v1/users
router.get('/:id', getUserById);    // GET /api/v1/users/:id
router.put('/:id', updateUser);     // PUT /api/v1/users/:id
router.delete('/:id', deleteUser);  // DELETE /api/v1/users/:id

export default router;