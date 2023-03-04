import express from "express";
import dotenv from "dotenv";
import initApp from "./app.router.js";
dotenv.config();
const app = express();
initApp(app, express);
const port = 5000;

app.listen(port, () => console.log(`Server Is Running On Port ${port}`));
