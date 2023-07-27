import mongoose, { Schema, model, Model } from "mongoose";
import { IProduct } from "@/interfaces/products-2";

const productSchema = new Schema(
  {
    description: { type: String, required: true },
    images: [{ type: String, required: true }],
    inStock: { type: Number, required: true, default: 0 },
    price: { type: Number, required: true, default: 10 },
    slug: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    category: {
      type: String,
      enum: {
        values: ["earphone", "headphone", "speaker"],
        message: "{VALUE} it is not a valid category",
      },
    },
    metaDescription: { type: String, required: true },
    metaKeywords: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

productSchema.index({ title: "text" });

const Product: Model<IProduct> =
  mongoose.models.Product || model("Product", productSchema);

export default Product;
