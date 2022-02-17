import express from "express";
import morgan from "morgan";

const app = express();
const logger = morgan("dev");

const localHost = 4000;

const home = (req, res) => {
  return res.send(`여기는 localHost=${localHost}의 Server 입니다`);
};

app.use(logger);
app.get("/", home);

app.listen(localHost, () =>
  console.log(`Server Listening on port ${localHost}`)
);
