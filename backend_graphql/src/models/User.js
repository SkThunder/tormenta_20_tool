import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: false, versionKey: false }
);

const UserModel = mongoose.model("users", UserSchema);

export default UserModel;
