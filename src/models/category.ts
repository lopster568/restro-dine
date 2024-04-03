import mongoose from "mongoose";

const Schema = mongoose.Schema;

const CategorySchema = new Schema(
  {
    name: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.models.CategorySchema ||
  mongoose.model("Category", CategorySchema);
