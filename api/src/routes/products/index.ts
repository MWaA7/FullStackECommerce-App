import { Router } from "express";
import {
  listProduct,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from "./productController.js";
import { validateData } from "../../middleware/validationMiddleware.js";

import {
  createProductSchema,
  updateProductSchema,
} from "../../db/productsSchema.js";
import { verifySeller, verifyToken } from "../../middleware/authMiddleware.js";

const router = Router();

router.get("/", listProduct);

router.get("/:id", getProductById);

router.post(
  "/",
  verifyToken,
  verifySeller,
  validateData(createProductSchema),
  createProduct
);

router.put(
  "/:id",
  verifyToken,
  verifySeller,
  validateData(updateProductSchema),
  updateProduct
);

router.delete("/:id", verifyToken, verifySeller, deleteProduct);

export default router;
