import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send("the list of products");
});

router.get("/:id", (req, res) => {
  console.log(req.params);
  res.send("the product with id");
});

router.post("/", (req, res) => {
  res.send("New Product Created");
});

export default router;