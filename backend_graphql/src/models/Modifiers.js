import mongoose from "mongoose";
import { attributeTypes, statusTypes, magicTypes } from "../utils/constants";

export const AttrModifierSchema = new mongoose.Schema(
  {
    attribute: {
      type: String,
      enum: attributeTypes,
      required: true,
    },
    modifier: {
      type: Number,
      required: true,
    },
  },
  { timestamps: false, versionKey: false }
);

export const StatusModifierSchema = new mongoose.Schema(
  {
    status: {
      type: String,
      enum: statusTypes,
      required: true,
    },
    modifier: {
      type: Number,
      required: true,
    },
  },
  { timestamps: false, versionKey: false }
);

export const MagicAditionSchema = new mongoose.Schema(
  {
    magic: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "magics",
    },
    type: {
      type: String,
      enum: magicTypes,
    },
    keyAttribute: {
      type: String,
      enum: attributeTypes,
    },
  },
  { timestamps: false, versionKey: false }
);

export const HabilitySchema = new mongoose.Schema(
  {
    name: String,
    description: String,
    cost: Number,
    statusModifiers: [StatusModifierSchema],
    magicChoices: [MagicAditionSchema],
    numberOfMagics: Number,
  },
  { timestamps: false, versionKey: false }
);
