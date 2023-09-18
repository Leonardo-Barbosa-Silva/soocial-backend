import express from 'express';
import usersRoutes from './users/index.js'
import postsRoutes from './posts/index.js'

const router = express.Router();


router.use('/v1/api/users', usersRoutes)
router.use('/v1/api/posts', postsRoutes)



export default router;