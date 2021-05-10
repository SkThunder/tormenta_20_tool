import mongoose from "mongoose";

const CharacterSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    //Nome do personagem
    name: {
      type: String,
      default: "Novo Personagem",
    },
    //Força
    str: {
      type: Number,
    },
    //Destreza
    dex: {
      type: Number,
    },
    //Constituição
    con: {
      type: Number,
    },
    //Inteligência
    int: {
      type: Number,
    },
    //Sabedoria
    wis: {
      type: Number,
    },
    //Carisma
    car: {
      type: Number,
    },
    //Pontos de vida máximos
    pv: {
      type: Number,
    },
    //Pontos de vida atuais
    currPv: {
      type: Number,
    },
    //Pontos de mana máximos
    pm: {
      type: Number,
    },
    //Pontos de vida atuais
    currPm: {
      type: Number,
    },
    //Personagem público
    isPublic: {
      type: Boolean,
    },
    //Devoto de: Deus
    devoutGodId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "gods",
    },
  },
  { timestamps: false, versionKey: false }
);

CharacterSchema.virtual("devoutGod", {
  ref: "gods",
  localField: "devoutGodId",
  foreignField: "_id",
  justOne: true,
})

const CharacterModel = mongoose.model("characters", CharacterSchema);

export default CharacterModel;
