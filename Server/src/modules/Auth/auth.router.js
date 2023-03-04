import { Router } from "express";
import auth from "../../middleware/auth.js";
import validation from "../../middleware/validation.js";
import { signIn, signUp } from "./auth.validation.js";
import * as authController from "./controller/auth.js";
const router = Router();

router.post("/signup", validation(signUp), authController.signUp);

router.post("/signin", validation(signIn), authController.signIn);

export default router;
