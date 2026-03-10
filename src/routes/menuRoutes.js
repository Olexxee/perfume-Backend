import express from "express";
import { verifyAdmin } from "../middlewares/auth.js";
import {
  getMenu,
  createMenuItem,
  updateMenuItem,
  deleteMenuItem,
} from "../controller/menuController.js";

const menuRouter = express.Router();

menuRouter.get("/", getMenu);

menuRouter.post("/", verifyAdmin, createMenuItem);

menuRouter.patch("/:id", verifyAdmin, updateMenuItem);

menuRouter.delete("/:id", verifyAdmin, deleteMenuItem);

export default menuRouter;
