import userModel from "../../../../DB/models/User.model.js";
import { compare, hash } from "../../../../utils/HashAndCompare.js";

export const updateUser = async (req, res, next) => {
  try {
    const User = await userModel.findByIdAndUpdate(req.user.id, req.body, {
      new: true,
    });
    return res.json({ message: `${req.user.username} Updated`, User });
  } catch (error) {
    return res.json({ message: "Catch Error", error, stack: error.stack });
  }
};

export const deleteUser = async (req, res, next) => {
  try {
    const User = await userModel.findByIdAndDelete(req.user.id);
    return res.json({ message: `${req.user.username} Deleted`, User });
  } catch (error) {
    return res.json({ message: "Catch Error", error, stack: error.stack });
  }
};

export const profile = async (req, res, next) => {
  try {
    const User = await userModel.findById(req.user._id);
    return res.json({ message: "Your Profile", User });
  } catch (error) {
    return res.json({ message: "Catch Error", error, stack: error.stack });
  }
};

export const updateUserPassword = async (req, res, next) => {
  try {
    const { password } = req.body;
    const newPassword = hash({ plainText: password });
    const User = await userModel.findByIdAndUpdate(
      req.user._id,
      { password: newPassword },
      {
        new: true,
      }
    );
    return res.json({ message: `${req.user.username} Password Updated`, User });
  } catch (error) {
    return res.json({ message: "Catch Error", error, stack: error.stack });
  }
};
