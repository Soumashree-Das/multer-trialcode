import { Router } from 'express';
import {
    addUser,
    registerUser,
    getUserDetails,
    getAllUsers,
    updateUser,
    deleteUser  // Import the new controller function
} from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js"

const router = Router();

router.route("/register").post(
    // upload.fields([
    //     {
    //         name : coverImage,
    //         maxCount : 1
    //     }
    // ]),//accepts arrays of info
    registerUser
); //http://localhost:8000/api/v1/users/register 
//works perfectly fpr registered user.. is user is not present or any credential is wrong server access is denied

//router.route("/login").post(login); ////http://localhost:8000/api/v1/users/login

router.post('/', addUser);
router.get('/', getAllUsers);
router.get('/:userId', getUserDetails);
router.patch('/:userId', updateUser);
router.get('/:userId', deleteUser);


//exporting the router
export default router;
