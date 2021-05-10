import CharacterModel from "../../../models/Character";
import GodModel from "../../../models/God";

export default {
  Character: {
    devoutGod: ({ devoutGod, devoutGodId, ...character}) => {
      if (devoutGod) return devoutGod;
      if (devoutGodId) return GodModel.findById(devoutGodId);
    },
  },

  Query: {
    getPlayerCharacters: (_, { userId }) => CharacterModel.find({ userId }).populate("devoutGod"),
    getPublicCharacters: () => CharacterModel.find({ isPublic: true }).populate("devoutGod"),
    getCharacter: (_, { characterId }) => CharacterModel.findById(characterId),
  },

  Mutation: {
    newCharacter: (_, { userId, data }) => {
      const newCharacter = { userId, ...data };
      return CharacterModel.create(newCharacter);
    },
    updateAttributes: (_, { characterId, data }) =>
      CharacterModel.findByIdAndUpdate(characterId, data),
    updateStatus: (_, { characterId, data }) =>
      CharacterModel.findByIdAndUpdate(characterId, data),
    updateDevoutGod: (_, { characterId, data }) => {
      if (characterId) {
        return CharacterModel.findByIdAndUpdate(characterId, data);
      } else {
        return CharacterModel.findByIdAndUpdate(
          { $unset: { devoutGodId: "" } },
          data
        );
      }
    },
    deleteCharacter: (_, { characterId }) =>
      CharacterModel.findByIdAndDelete(characterId),
  },
};
