import mongoose from "mongoose";

const Schema = mongoose.Schema;

const MenuItemsSchema = new Schema(
  {
    category: { type: String, required: true },
    name: { type: String, required: true },
    eta: { type: Number, required: true },
    spice: { type: Number, default: null},
    signature: { type: Boolean, required: true },
  },
  { timestamps: true }
);

export default mongoose.models.MenuItems || mongoose.model("MenuItems", MenuItemsSchema);