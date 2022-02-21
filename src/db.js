import mongoose from "mongoose";

mongoose.connect(process.env.DB_URL); //mongoose를 이용해서 javascript와 mongo 연결

const db = mongoose.connection;

const handleOpen = () => console.log("Connected to MongoDB");
const handleError = (error) => console.log("DB Error", error);

db.on("error", handleError);
db.once("open", handleOpen);
