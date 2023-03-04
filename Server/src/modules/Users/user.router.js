import { Router } from "express";
import auth from "../../middleware/auth.js";
import * as userController from "./controller/user.js";
const router = Router();

router.put("/", auth, userController.updateUser);

router.delete("/", auth, userController.deleteUser);

router.get("/profile", auth, userController.profile);

router.put("/update-password", auth, userController.updateUserPassword);

export default router;
