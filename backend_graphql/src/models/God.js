import mongoose from "mongoose";

const GodSchema = new mongoose.Schema(
  {
    //Nome do Deus
    name: {
      type: String,
      required: true,
    },
    //Descrição do Deus
    description: {
      type: String,
    },
    //Porfolio do Deus
    portfolio: [
      {
        type: String,
      },
    ],
    //Obrigações e Restrições do Deus
    obligations: {
      type: String,
    },
    //Crenças e Objetivos do Deus
    creeds: {
      type: String,
    },
    //Armas preferidas do Deus
    favoriteWeapon: {
      type: String,
      default: "none",
    },
    //Símbolo sagrado do Deus
    holySymbol: {
      type: String,
    },
    //Tipo de energia do Deus
    energyType: {
      type: String,
      enum: ["dark", "light", "any"],
    },
    //Classes permitidas do Deus
    approvedClasses: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "classes",
      },
    ],
    //Raças permitidas do Deus
    approvedRaces: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "races",
      },
    ],
    //Poderes concedidos do Deus
    grantedPowers: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "powers",
      },
    ],
  },
  { timestamps: false, versionKey: false }
);

const GodModel = mongoose.model("gods", GodSchema);

export default GodModel;
