import { Router } from "express";
import {getAllProducts, getProductByCatId, createProduct } from "../controllers/productController";
const router = Router();

router.get("/", getProductByCatId);

router.get("/all", getAllProducts);

router.post("/", createProduct);

export default router;
