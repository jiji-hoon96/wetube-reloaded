import express from "express";
import morgan from "morgan";

const app = express();
const logger = morgan("dev");
app.use(logger);
const localHost = 4000;

const globalRouter = express.Router(); //홈페이지,로그인,회원가입
const handleHome = (req, res) => res.send("여기는 홈페이지입니다");
globalRouter.get("/", handleHome); // app.use를 먼저 실행후 globalRouter를 실행해 /로 시작하는 url 실행

const videoRouter = express.Router(); //video를 upload, delete, eidt
const handleWatchVideo = (req, res) =>
  res.send("여기는 비디오를 보는 페이지입니다");
videoRouter.get("/watch", handleWatchVideo); //app.use('/videos) 를 실행후 videoRouter 실행해 get 메소드를 이용해 다음 path인 watch를 실행

const userRouter = express.Router(); //User의 정보를 지우거나,수정
const handleUserEdit = (req, res) =>
  res.send("여기는 유저의 정보를 수정하는 페이지입니다");
userRouter.get("/edit", handleUserEdit);

app.use("/", globalRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);

app.listen(localHost, () =>
  console.log(`Server Listening on port ${localHost}`)
);
