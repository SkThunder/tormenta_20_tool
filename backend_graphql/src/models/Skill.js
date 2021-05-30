import mongoose from "mongoose";

const actionSchema = new mongoose.Schema({
  //Título do uso de perícia
  title: {
    type: String,
    required: true,
  },
  //Descrição do uso de perícia
  description: {
    type: String,
  },
});

const SkillSchema = new mongoose.Schema({
  //Nome da proficiência
  name: {
    type: String,
    required: true,
  },
  //Atributo chave padrão da proficiência
  defaultAttribute: {
    type: String,
    enum: ["STR", "DEX", "CON", "INT", "WIS", "CAR"],
    required: true,
  },
  //Perícia somente treinada?
  trainedOnly: {
    type: Boolean,
  },
  //Aplica penalidade de armadura
  armorPenalty: {
    type: Boolean,
  },
  //Descrição geral da perícia
  description: {
    type: String,
  },
  //Usos principais da perícia
  uses: [actionSchema],
});

const SkillModel = mongoose.model("skills", SkillSchema);

export default SkillModel;
