import { Router } from "express";
import auth from "../../middleware/auth.js";
import * as blogController from "./controller/blog.js";
const router = Router();

router.post("/", auth, blogController.addBlog);

router.get("/", auth, blogController.getAllBlogs);

router.get("/:id", auth, blogController.getBlogById);

router.put("/:id", auth, blogController.updateBlog);

router.delete("/:id", auth, blogController.deleteBlog);

export default router;
