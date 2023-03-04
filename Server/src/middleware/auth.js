import userModel from "../../DB/models/User.model.js";
import { verifyToken } from "../../utils/GenerateAndVerifyToken.js";

const auth = async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    if (!authorization.startsWith(process.env.BEARER_KEY)) {
      return res.json({ message: "In-Valid Bearer Key || Authorization" });
    }
    const token = authorization.split(process.env.BEARER_KEY)[1];
    if (!token) {
      return res.json({ message: "Token Required" });
    }
    const decoded = verifyToken({token});
    const authUser = await userModel
      .findById(decoded.id)
      .select("username email");
    if (!authUser) {
      return res.json({ message: "Account Not Found" });
    }
    req.user = authUser;
    return next();
  } catch (error) {
    return res.json({
      message: "Catch Error",
      tokenError: error?.message,
      stack: error.stack
    });
  }
};

export default auth;
