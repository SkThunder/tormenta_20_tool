import mongoose from "mongoose";
import { attributeTypes } from "../utils/constants";

const actionSchema = new mongoose.Schema(
  {
    //Título do uso de perícia
    title: {
      type: String,
      required: true,
    },
    //Descrição do uso de perícia
    description: String,
  },
  { timestamps: false, versionKey: false }
);

const SkillSchema = new mongoose.Schema(
  {
    //Nome da proficiência
    name: {
      type: String,
      required: true,
    },
    //Atributo chave padrão da proficiência
    defaultAttribute: {
      type: String,
      enum: attributeTypes,
      required: true,
    },
    //Perícia somente treinada?
    trainedOnly: Boolean,
    //Aplica penalidade de armadura
    armorPenalty: Boolean,
    //Descrição geral da perícia
    description: String,
    //Usos principais da perícia
    uses: [actionSchema],
  },
  { timestamps: false, versionKey: false }
);

const SkillModel = mongoose.model("skills", SkillSchema);

export default SkillModel;
