import express from "express";
import { getUser } from "../controller/Users.js";

const router = express.Router();

router.get("/users", getUser);

export default router;
