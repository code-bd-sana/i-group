import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    internalId: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    name: String,
    role: {
      type: String,
      enum: [ "agent", "sub-agent", "admin", "sub-admin"],
      default: "user",
    },
    phone: Number,
    company: String,
    adress: String,
    region: String,
    joinDate: String,
    status: String,
    unplineAgent: String,
    accountId: String,
  },
  {
    timestamps: true,
  }
);

// Prevent model overwrite in HMR (Next.js / Node)
const User =  model("User", userSchema);

export default User;
