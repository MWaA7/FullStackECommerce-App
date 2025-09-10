import { Router } from "express";
import {
  listProduct,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from "./productController";
import { validateData } from "../../middleware/validationMiddleware";

import { createProductSchema, updateProductSchema } from "../../db/productsSchema";

const router = Router();

router.get("/", listProduct);

router.get("/:id", getProductById);

router.post("/", validateData(createProductSchema), createProduct);

router.put("/:id", validateData(updateProductSchema), updateProduct);

router.delete("/:id", deleteProduct);

export default router;
