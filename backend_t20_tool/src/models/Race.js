import mongoose from "mongoose";
import { AttrModifierSchema } from "./Modifiers";
import { sizeTypes } from "../utils/constants"

const RaceSchema = new mongoose.Schema(
  {
    //Nome da raça
    name: {
      type: String,
      required: true,
    },
    //História prolongada da raça
    history: String,
    //Descrição da raça
    description: String,
    //Modificadores de atributo raciais
    attrModifiers: [AttrModifierSchema],
    //Habilidades de raça
    raceAbilityIds: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "abilities",
      },
    ],
    //Tamanho da raça
    raceSize: {
      type: String,
      enum: sizeTypes
    },
  },
  { timestamps: false, versionKey: false }
);

const RaceModel = mongoose.model("races", RaceSchema);

export default RaceModel;
