import { Schema, model, models } from "mongoose";

export interface UserSchema {
  clerkId: string;
  email: string;
  username: string;
  photo?: string;
  firstName: string;
  lastName: string;
  planId: string;
  creditBalance: number;
}

const UserModal = new Schema({
  clerkId: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  photo: { type: String, required: true },
  firstName: { type: String },
  lastName: { type: String },
  planId: { type: Number, default: 1 },
  creditBalance: { type: Number, default: 50 },
});

const User = models?.User || model("User", UserModal);

export default User;
