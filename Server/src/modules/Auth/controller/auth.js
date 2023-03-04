import userModel from "../../../../DB/models/User.model.js";
import { generateToken } from "../../../../utils/GenerateAndVerifyToken.js";
import { compare, hash } from "../../../../utils/HashAndCompare.js";

export const signUp = async (req, res, next) => {
  try {
    const { email, password, age, name } = req.body;
    const checkUser = await userModel.findOne({ email });
    if (checkUser) {
      return res.json({ message: "This Email Already Exists!" });
    }
    const hashPassword = hash({ plainText: password, saltRound: 10 });
    const User = await userModel.create({
      email,
      password: hashPassword,
      age,
      name,
    });
    return res.json({ message: `Welcome ${name}`, User });
  } catch (error) {
    return res.json({ message: "Catch Error", error, stack: error.stack });
  }
};

export const signIn = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const User = await userModel.findOne({ email });
    if (!User) {
      return res.json({ message: "In-Valid Email" });
    }
    const match = compare({ plainText: password, hashValue: User.password });
    if (!match) {
      return res.json({ message: "In-Valid Password" });
    }
    const Token = generateToken({
      payload: { id: User._id, isLoggedIn: true },
      expiresIn: 60 * 60 * 24 * 30,
    });
    return res.json({ message: "Done", Token });
  } catch (error) {
    return res.json({ message: "Catch Error", error, stack: error.stack });
  }
};
