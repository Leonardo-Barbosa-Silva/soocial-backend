import express from 'express';
import autho from '../../middleware/autho.js';
import postsControllers from '../../controllers/posts/index.js';


const router = express.Router();
const {
    create,
    getMyPosts,
    getMyFeed,
    getUserPosts,
    likePost
} = postsControllers


router.get('/my', autho, getMyPosts)
router.get('/my/feed', autho, getMyFeed)
router.get('/user/:userId', autho, getUserPosts)
router.post('/create', autho, create)
router.patch('/likes/:postId', autho, likePost)




export default router;