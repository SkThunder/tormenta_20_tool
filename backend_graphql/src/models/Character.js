import mongoose from "mongoose";

const CharacterSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  { timestamps: false, versionKey: false }
);

const CharacterSchema = mongoose.model("characters", CharacterSchema);

export default CharacterSchema;
