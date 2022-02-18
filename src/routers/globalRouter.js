import express from "express";

const globalRouter = express.Router(); //홈페이지,로그인,회원가입
const handleHome = (req, res) => res.send("여기는 홈페이지입니다");
const handleJoin = (req, res) => res.send("여기는 회원가입페이지입니다");
const handleLogin = (req, res) => res.send("여기는 로그인 페이지입니다");
const handleSearch = (req, res) => res.send("여기는 검색페이지입니다");
globalRouter.get("/", handleHome); // app.use를 먼저 실행후 globalRouter를 실행해 /로 시작하는 url 실행
globalRouter.get("/join", handleJoin);
globalRouter.get("/login", handleLogin);
globalRouter.get("/search", handleSearch);

export default globalRouter;
