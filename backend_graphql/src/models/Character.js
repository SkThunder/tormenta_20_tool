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
    //ID - Raça
    raceId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "races",
    },
    //ID - Origem
    originId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "origins",
    },
    //ID - Devoto de: Deus
    devoutGodId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "gods",
    },
    //Força
    str: Number,
    //Destreza
    dex: Number,
    //Constituição
    con: Number,
    //Inteligência
    int: Number,
    //Sabedoria
    wis: Number,
    //Carisma
    car: Number,
    //Pontos de vida máximos
    pv: Number,
    //Pontos de vida atuais
    currPv: Number,
    //Pontos de mana máximos
    pm: Number,
    //Pontos de vida atuais
    currPm: Number,
    //Ponto de experiência do Personagem
    exp: Number,
    //Personagem público
    isPublic: Boolean,
  },
  { timestamps: false, versionKey: false }
);

CharacterSchema.virtual("user", {
  ref: "users",
  localField: "userId",
  foreignField: "_id",
  justOne: true,
});

CharacterSchema.virtual("devoutGod", {
  ref: "gods",
  localField: "devoutGodId",
  foreignField: "_id",
  justOne: true,
});

const CharacterModel = mongoose.model("characters", CharacterSchema);

export default CharacterModel;
