import express from "express";
import { formSubmit, getAllUser } from "../controllers/form-controller.js";

const router = express.Router();
router.get("/all", getAllUser);
router.post("/submit", formSubmit);

export default router;

