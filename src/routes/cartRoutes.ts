import {Router} from "express";
import {createCart} from "../controllers/cartController"

const router = Router();

router.post('/addToCart',createCart);


export default router;