import express from "express";
import {
  handleWatchVideo,
  handleUploadVideo,
  handleEditVideo,
  handleDeleteVideo,
  handleCommentsVideo,
} from "../controllers/videoController";
const videoRouter = express.Router(); //video를 upload, delete, eidt

videoRouter.get("/watch", handleWatchVideo); //app.use('/videos) 를 실행후 videoRouter 실행해 get 메소드를 이용해 다음 path인 watch를 실행
videoRouter.get("/upload", handleUploadVideo);
videoRouter.get("/edit", handleEditVideo);
videoRouter.get("/delete", handleDeleteVideo);
videoRouter.get("/comments", handleCommentsVideo);

export default videoRouter;
