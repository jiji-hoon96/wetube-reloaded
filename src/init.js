import "dotenv/config";
import "./db";
import "./models/Video";
import "./models/User";
import app from "./server";

const localHost = 4000;
app.listen(localHost, () =>
  console.log(`Server Listening on port ${localHost}`)
);
