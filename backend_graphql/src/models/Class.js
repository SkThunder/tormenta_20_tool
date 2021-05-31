import mongoose from "mongoose";

const ClassSkillSchema = new mongoose.Schema(
  {
    //Perícias treinadas recebidas
    defaultSkillIds = [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "skills",
    }],
    //Perícias treinadas a serem decididas entre uma ou outra
    orSkillIds = [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "skills",
    }],
    //Lista de escolhas de perícias treinadas
    listSkillIds = [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "skills",
    }],
    //Número de escolhas de treinamento da lista
    numberOfChoices = Number
  },
  { timestamps: false, versionKey: false }
);

const ClassSchema = new mongoose.Schema(
  {
    //Nome da classe
    name: {
      type: String,
      required: true,
    },
    //Pontos de vida iniciais
    initialPv: Number,
    //Pontos de mana iniciais
    initialPM: Number,
    //Pontos de vida por nível
    pvPerLevel: Number,
    //Pontos de mana por nível
    pmPerLevel: Number,
    //Perícias treinadas de classe
    skillsFromClass = ClassSkillSchema,
    //ID - Proficiências de classe
    proficiencyIdsFromClass = [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "proficiencies",
    }],
    //Lista de poderes da classe (Escolhas do Poder de Classe)
    classPowerIdsList = [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "abilities",
    }],
    //Lista de poderes de progressão da classe (Adquiridos por nível de classe)
    classProgressionIdsList = [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "abilities",
    }],
  },
  { timestamps: false, versionKey: false }
);
