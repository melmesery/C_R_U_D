import { Router } from "express";
import * as productController from "./controller/product.js";
const router = Router();

router.post("/", productController.addProduct);

router.get("/", productController.getAllProducts);

router.get("/:id", productController.searchId);

router.patch("/:id", productController.updateProduct);

router.delete("/:id", productController.deleteProduct);

export default router;
