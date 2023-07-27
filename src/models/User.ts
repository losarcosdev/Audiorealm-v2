import mongoose, { Schema, model, Model } from "mongoose";
import { IUser } from "@/interfaces";

const userSchema = new Schema(
  {
    image: { type: String, required: false },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: {
      type: String,
      enum: {
        values: ["admin", "client"],
        message: "{VALUE} it is not a valid role",
        default: "client",
        required: true,
      },
    },
    addresses: [
      {
        location   : { type: String, required: true  },
        address    : { type: String, required: true },
        address2   : { type: String },
        city       : { type: String, required: true },
        country    : { type: String, required: true },
        phoneNumber: { type: String, required: true },
        postalCode : { type: String, required: true },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const User: Model<IUser> = mongoose.models.User || model("User", userSchema);

export default User;
