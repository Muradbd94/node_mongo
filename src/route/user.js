import { Router } from "express";
import { register } from "../controller/userController.js";
import { getUser } from "../controller/userController.js";

const router = Router();

router.post("/register", register);
router.get("/users", getUser);
export default router;