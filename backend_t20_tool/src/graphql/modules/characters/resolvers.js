import CharacterModel from "../../../models/Character";
import GodModel from "../../../models/God";
import UserModel from "../../../models/User";

export default {
  Character: {
    user: ({ user, userId }) => {
      if (user) return user;
      if (userId) return UserModel.findById(userId);
    },
    devoutGod: ({ devoutGod, devoutGodId }) => {
      if (devoutGod) return devoutGod;
      if (devoutGodId) return GodModel.findById(devoutGodId);
    },
  },

  Query: {
    getPlayerCharacters: (_, { userId }) =>
      CharacterModel.find({ userId }).populate("devoutGod").populate("user"),
    getPublicCharacters: () =>
      CharacterModel.find({ isPublic: true })
        .populate("devoutGod")
        .populate("user"),
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
    updateDevoutGod: (_, { characterId, godId }) => {
      if (characterId && godId) {
        return CharacterModel.findByIdAndUpdate(characterId, {
          devoutGodId: godId,
        });
      } else {
        return CharacterModel.findByIdAndUpdate(characterId, {
          $unset: { devoutGodId: "" },
        });
      }
    },
    deleteCharacter: (_, { characterId }) =>
      CharacterModel.findByIdAndDelete(characterId),
  },
};
