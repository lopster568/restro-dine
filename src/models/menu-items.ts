import mongoose from "mongoose";

const Schema = mongoose.Schema;

const MenuItemsSchema = new Schema(
  {
    category: { type: String, required: true },
    name: { type: String, required: true },
    eta: { type: String, required: true },
    price: { type: String, required: true },
    spice: { type: String, default: true},
    signature: { type: Boolean, required: true },
  },
  { timestamps: true }
);

export default mongoose.models.MenuItems || mongoose.model("MenuItems", MenuItemsSchema);