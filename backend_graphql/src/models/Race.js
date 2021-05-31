import mongoose from "mongoose";
import { AttrModifierSchema, HabilitySchema } from "./Modifiers";

const RaceSchema = new mongoose.Schema(
  {
    name: String,
    history: String,
    description: String,
    attrModifiers: [AttrModifierSchema],
    raceHabilities: [HabilitySchema],
  },
  { timestamps: false, versionKey: false }
);

const RaceModel = mongoose.model("races", RaceSchema);

export default RaceModel;
