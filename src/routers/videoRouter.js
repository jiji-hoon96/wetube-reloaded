import express from "express";
import {
  upload,
  watch,
  getEdit,
  postEdit,
  remove,
} from "../controllers/videoController";
const videoRouter = express.Router();

videoRouter.get("/:id(\\d+)", watch);

videoRouter.route("/:id(\\d+)/edit").get(getEdit).post(postEdit);
videoRouter.get("/:id(\\d+)/remove", remove);

export default videoRouter;
