import express from 'express';
import multerUpload from '../../configs/multer.js';
import usersControllers from '../../controllers/users/index.js';
import autho from '../../middleware/autho.js';


const router = express.Router();
const {
    register,
    login,
    getMe,
    getUserData,
    getUserFriends,
    addRemoveFriend
} = usersControllers


router.post('/auth/register', multerUpload.single("picture"), register);
router.post('/auth/login', login);
router.get('/me', autho, getMe);

router.get("/:id", autho, getUserData);
router.get('/:id/friends', autho, getUserFriends);
router.patch('/me/friends/:friendId', autho, addRemoveFriend);



export default router;