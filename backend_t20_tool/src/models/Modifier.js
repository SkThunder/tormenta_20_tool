import mongoose from "mongoose";
import { attributeTypes, statusTypes, magicTypes } from "../utils/constants";

export const AttrModifierSchema = new mongoose.Schema(
  {
    //Atributo a ser modificado
    attribute: {
      type: String,
      enum: attributeTypes,
      required: true,
    },
    //Número do modificador
    modifier: {
      type: Number,
      required: true,
    },
  },
  { timestamps: false, versionKey: false }
);

export const StatusModifierSchema = new mongoose.Schema(
  {
    //Tipo de modificação de status
    status: {
      type: String,
      enum: statusTypes,
      required: true,
    },
    //Número do modificador
    modifier: {
      type: Number,
      required: true,
    },
  },
  { timestamps: false, versionKey: false }
);

export const SkillModifierSchema = new mongoose.Schema(
  {
    skillId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "skills",
    },
    modifier: Number,
  },
  { timestamps: false, versionKey: false }
);

export const MagicAditionSchema = new mongoose.Schema(
  {
    //Magia disponível
    magicId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "magics",
      required: true,
    },
    //Tipo da magia
    type: {
      type: String,
      enum: magicTypes,
    },
    //Atributo chave de conjuração da magia
    keyAttribute: {
      type: String,
      enum: attributeTypes,
    },
  },
  { timestamps: false, versionKey: false }
);
