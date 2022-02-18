import express from "express";
import {
  handleUserEdit,
  handleUserDelete,
} from "../controllers/userController";
const userRouter = express.Router(); //User의 정보를 지우거나,수정

userRouter.get("/edit", handleUserEdit); //app.use('/users)를 실행후 userRotuer를 실행해 해당 path에 있는  handleUserEdit 실행
userRouter.get("/delete", handleUserDelete);

export default userRouter;
