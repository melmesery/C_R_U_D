import authRouter from "./src/modules/Auth/auth.router.js";
import userRouter from "./src/modules/Users/user.router.js";
import blogRouter from "./src/modules/Blogs/blog.router.js";
import productRouter from "./src/modules/products/product.router.js";
import connectDB from "./DB/connection.js";
import cors from "cors";
import bodyParser from "body-parser";

const initApp = (app, express) => {
  connectDB();

  app.use(express.json({}));

  app.use(cors());

  app.use(bodyParser.json());

  app.get("/", (req, res) => res.send("<h1>Hello World!</h1>"));

  app.use("/auth", authRouter);
  app.use("/user", userRouter);
  app.use("/blog", blogRouter);
  app.use("/product", productRouter);

  app.use("*", (req, res) => {
    return res.json({ message: "404 - Page Not Found" });
  });
};

export default initApp;
