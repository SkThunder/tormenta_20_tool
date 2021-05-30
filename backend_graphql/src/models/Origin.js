import mongoose from "mongoose";

const OriginSchema = new mongoose.Schema(
  {
    //Nome da origem
    name: {
      type: String,
      required: true,
    },
    //Descrição da origem
    description: {
      type: String,
    },
    //ID - Beneficios de origem - Perícias
    skillIds: {
      type: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "skills",
        },
      ],
    },
    //ID - Beneficios de origem - Poderes
    powerIds: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "powers",
      },
    ],
    //ID - Itens iniciais
    initialItemIds: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "items",
      },
    ],
  },
  { timestamps: false, versionKey: false }
);

const OriginModel = mongoose.model("origins", OriginSchema);

export default OriginModel;
