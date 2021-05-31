import mongoose from "mongoose";
const { attributeTypes } = require("../utils/constants");

const CharacterSkillSchema = new mongoose.Schema(
  {
    skillId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "skills",
      required: true,
    },
    currentAttr: {
      type: String,
      enum: attributeTypes,
    },
    currentModifier: Number,
  },
  { timestamps: false, versionKey: false }
);

const CharacterAttributeSchema = mongoose.Schema(
  {
    //Nome do atributo
    name: {
      type: String,
      required: true,
    },
    //Codigo de identificação do atributo
    attrCode: {
      type: String,
      required: true,
      enum: attributeTypes,
    },
    //Valor somado total do atributo
    totalValue: {
      type: Number,
      required: true,
    },
    //Valor total do modificador de atributo
    modifierTotalValue: {
      type: Number,
      required: true,
    },
    //Valor inicial do atributo do personagem
    initialValue: {
      type: Number,
      required: true,
    },
    //Soma do bonus vindo de diversas fontes
    bonusValue: Number,
    //Modificador do atributo setado na ficha
    currentModifier: Number,
    //ID - Poderes influenciando no atributo
    affectingAbilityIds: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "abilities",
    },
  },
  { timestamps: false, versionKey: false }
);

const defaultDefenseAttr = attributeTypes ? attributeTypes[1] : "DEX";

const attrDefSchema = mongoose.Schema(
  {
    //Atributo a ser somado na defesa
    attribute: {
      type: String,
      enum: attributeTypes,
    },
    //Se está sendo limitado pelo nível
    levelLimited: Boolean,
    //Valor a ser somado na Defesa
    totalValue: Number,
  },
  { timestamps: false, versionKey: false }
);

const CharacterDefenseSchema = new mongoose.Schema(
  {
    //Soma total de defesa
    totalValue: {
      type: Number,
      required: true,
    },
    //Escolhas disponíveis de atributo para somar (Equivalente à destreza)
    attributeChoices: {
      type: [String],
      enum: attributeTypes,
      default: [defaultDefenseAttr], //Apenas destreza soma como padrão
    },
    //Modificadores de atributos somando na Defesa
    bonusAttributes: {
      type: [attrDefSchema],
      default: [defaultPVAttr],
    },
    //Determina se a destreza ou atributo equivalente vai somar ou náo
    canSumDex: Boolean,
    //Bônus total vindo de habilidades
    totalBonus: Number,
    //Bônus vindo de armaduras e escudos
    armorBonus: Number,
    //Modificador setado na ficha
    defMod: Number,
    //ID - Poderes influenciando na defesa
    affectingAbilityIds: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "abilities",
    },
  },
  { timestamps: false, versionKey: false }
);

const defaultPVAttr = attributeTypes ? attributeTypes[2] : "CON";

const CharacterStatusSchema = new mongoose.Schema(
  {
    //Pontos de vida totais do personagem
    totalPV: Number,
    //Pontos de vida atuais do personagem
    currPV: Number,
    //Soma de todos os bonus de PV por nivel
    perLevelPV: Number,
    //Atributos sendo somados no PV (Padrão const)
    bonusPVAttributes: {
      type: [String],
      enum: attributeTypes,
      default: [defaultPVAttr],
    },
    //ID - Poderes influenciando nos PV
    PVAbilityIds: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "abilities",
    },
    //Pontos de mana totais do personagem
    totalPM: Number,
    //Pontos de mana atuais do personagem
    currPM: Number,
    //Soma de todos os bonus de PM por nivel
    perLevelPM: Number,
    //Atributos sendo somados no PM (Padrão nenhum)
    bonusPMAttributes: {
      type: [String],
      enum: attributeTypes,
      default: [],
    },
    //ID - Poderes influenciando nos PM
    PMAbilityIds: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "abilities",
    },
  },
  { timestamps: false, versionKey: false }
);

const CharacterProgressionSchema = new mongoose.Schema(
  {
    //Nivel no qual foram realizadas as escolhas
    level: Number,
    //ID - Classe escolhida
    classId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "classes",
    },
    //ID - Habilidades recebidas / escolhidas
    abilityIds: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "abilities",
      },
    ],
    //ID - Perícias treinadas
    skillIds: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "skills",
      },
    ],
    //ID - Itens recebidos / escolhidos
    // itemIds: [{
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "items",
    // }],
  },
  { timestamps: false, versionKey: false }
);

const CharacterSchema = new mongoose.Schema(
  {
    //ID - Jogador
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    //Nome do personagem
    name: {
      type: String,
      default: "Novo Personagem",
      required: true,
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
    //Defesa do personagem
    defense: CharacterDefenseSchema,
    //Atributos do personagem
    attributes: [CharacterAttributeSchema],
    //PV e PM do personagem
    status: CharacterStatusSchema,
    //Tudos sobre perícias do Personagem
    characterSkills: [CharacterSkillSchema],
    //Registro de escolhas por nível do personagem
    progression: [CharacterProgressionSchema],
    //Pontos de experiência totais do Personagem
    totalExp: Number,
    //Nível total de personagem
    totalLevel: Number,
    //Armadura equipada
    // equipedArmor: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "items",
    // },
    //Escudo equipado
    // equipedArmor: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "items",
    // },
    //Equipamentos na ficha
    // carriedItems: [{
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "items",
    // }],
    //Modificador de penalidade de armadura
    armorPenMod: Number,
    //Penalidade de armadura total atual
    armorPen: Number,
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
