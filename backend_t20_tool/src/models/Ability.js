import mongoose from "mongoose";
import {
  StatusModifierSchema,
  MagicAditionSchema,
  AttrModifierSchema,
  SkillModifierSchema,
} from "./Modifiers";
import { actionTypes, powerTypes, attributeTypes } from "../utils/constants";

const PreRequisiteSchema = new mongoose.Schema(
  {
    //Atributo necessário
    attribute: {
      Type: String,
      enum: attributeTypes,
    },
    //Valor mínimo do atributo
    attrMinvalue: Number,
    //Poder necessário
    requiredPowerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "abilities",
    },
    //Nível de classe mínimo necessário
    minClassLevel: Number,
    //Nível total mínimo necessário
    minTotalLevel: Number,
  },
  { timestamps: false, versionKey: false }
);

const ChoicesSchema = new mongoose.Schema({
  //Nome da escolha dentro de um poder
  name: String
}, { timestamps: false, versionKey: false });

const AbilitySchema = new mongoose.Schema(
  {
    //Nome da habilidade
    name: {
      type: String,
      required: true,
    },
    //Descrição da habilidade
    description: String,
    //Ação necessária
    requiredAction: {
      type: String,
      enum: actionTypes,
    },
    //Condição de ativação da habilidade
    condition: String,
    //Custo em PM da habilidade
    cost: Number,
    //Limitada por nível
    levelLimited: Boolean,
    //Efeito da habilidade nos status
    statusModifiers: [StatusModifierSchema],
    //Lista de magias disponíveis pela habilidade
    magicChoices: [MagicAditionSchema],
    //Número de escolhas entre as magias disponíveis da habilidade
    numberOfMagics: Number,
    //Efeito da habilidade nas perícias
    skillModifiers: [SkillModifierSchema],
    //Efeito da habilidade nos atributos
    attributeModifiers: [AttrModifierSchema],
    //Categorização em grupo de poderes
    powerGroup: {
      type: String,
      enum: powerTypes,
    },
    preRequisites: [PreRequisiteSchema],
    choices: [ChoicesSchema],
  },
  { timestamps: false, versionKey: false }
);

const AbilityModel = mongoose.model("abilities", AbilitySchema);

export default AbilityModel;
