import blogModel from "../../../../DB/models/Blog.model.js";

export const getAllBlogs = async (req, res, next) => {
  try {
    const Blogs = await blogModel
      .find()
      .populate({ path: "addedBy", select: "name email" });
    return Blogs
      ? res.json({ message: "Done", Blogs })
      : res.json({ message: "No Blogs Found!" });
  } catch (error) {
    return res.json({ message: "Catch Error", error, stack: error.stack });
  }
};

export const addBlog = async (req, res, next) => {
  try {
    const { content, year } = req.body;
    const Blog = await blogModel.create({ content, year, addedBy: req.user._id });
    return res.json({ message: `${req.user.username} Added A New Blog`, Blog });
  } catch (error) {
    return res.json({ message: "Catch Error", error, stack: error.stack });
  }
};

export const getBlogById = async (req, res, next) => {
  try {
    const Blog = await blogModel
      .findById(req.params.id)
      .select("-createdAt")
      .populate({ path: "addedBy", select: "username email" });
    return Blog
      ? res.json({ message: "Done", Blog })
      : res.json({ message: "Blog Not Found, Check Id" });
  } catch (error) {
    return res.json({ message: "Catch Error", error, stack: error.stack });
  }
};

export const updateBlog = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { content, year } = req.body;
    const Blog = await blogModel.findOneAndUpdate(
      {
        _id: id,
        addedBy: req.user._id,
      },
      { content, year },
      { new: true }
    );
    return Blog
      ? res.json({ message: "Blog Updated", Blog })
      : res.json({ message: "Not Authenticated" });
  } catch (error) {
    return res.json({ message: "Catch Error", error, stack: error.stack });
  }
};

export const deleteBlog = async (req, res, next) => {
  try {
    const { id } = req.params;
    const Blog = await blogModel.findOneAndDelete({
      _id: id,
      addedBy: req.user._id,
    });
    return Blog
      ? res.json({ message: "Blog Deleted", Blog })
      : res.json({ message: "Not Authenticated" });
  } catch (error) {
    return res.json({ message: "Catch Error", error, stack: error.stack });
  }
};
