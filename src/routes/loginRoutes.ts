import { Router } from "express";

import  {verifyLogin}  from "../controllers/loginController";

const router = Router();

router.post("/", verifyLogin)

export default router;