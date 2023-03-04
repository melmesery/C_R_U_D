import productModel from "../../../../DB/models/Product.model.js";
import userModel from "../../../../DB/models/User.model.js";

export const addProduct = async (req, res, next) => {
  try {
    const { title, description, price, userId } = req.body;
    const User = await userModel.findById(userId);
    if (!User) {
      return res.json({ message: "Invalid UserId" });
    }
    const Product = await productModel.create({
      title,
      description,
      price,
      userId,
    });
    return res.json({ message: "A New Product Added", Product });
  } catch (error) {
    return res.json({ message: "Catch Error", error, stack: error.stack });
  }
};

export const updateProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const getProduct = await productModel.findById(id);
    if (req.body.userId == getProduct.userId) {
      const Product = await productModel.updateOne({ _id: id }, req.body);
      return res.json({ message: "A New Product Updated", Product });
    }
    res.json({ message: "In-Valid IDs" });
  } catch (error) {
    return res.json({ message: "Catch Error", error, stack: error.stack });
  }
};

export const deleteProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const getProduct = await productModel.findById(id);
    if (req.body.userId == getProduct.userId) {
      const Product = await productModel.deleteOne({ _id: id });
      return res.json({ message: "Product Deleted", Product });
    }
    res.json({ message: "In-Valid IDs" });
  } catch (error) {
    return res.json({ message: "Catch Error", error, stack: error.stack });
  }
};

export const getAllProducts = async (req, res, next) => {
  try {
    const Products = await productModel.find().select("-createdAt").populate({
      path: "userId",
      model: "User",
      select: "username email",
    });
    return !Products.length
      ? res.json({ message: "No Products Found!" })
      : res.json({ message: "Done", Products });
  } catch (error) {
    return res.json({ message: "Catch Error", error, stack: error.stack });
  }
};

export const searchId = async (req, res, next) => {
  try {
    const { id } = req.params;
    const Product = await productModel.findById(id);
    return Product
      ? res.json({ message: "Done", Product })
      : res.json({ message: "No Products Found!" });
  } catch (error) {
    return error.kind == "ObjectId"
      ? res.json({ message: "Please, Check Id" })
      : res.json({ message: "Catch Error", error, stack: error.stack });
  }
};
