import { Schema, model, Types } from "mongoose";

const blogSchema = new Schema(
  {
    content: {
      type: String,
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
    addedBy: {
      type: Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const blogModel = model("Blog", blogSchema);

export default blogModel;
