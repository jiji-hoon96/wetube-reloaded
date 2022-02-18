import express from "express";
import { watch, edit, remove, logout } from "../controllers/userController";

const userRouter = express.Router();

userRouter.get("/:id(\\d+)", watch);
userRouter.get("/logout", logout);
userRouter.get("/edit", edit);
userRouter.get("/remove", remove);

export default userRouter;
