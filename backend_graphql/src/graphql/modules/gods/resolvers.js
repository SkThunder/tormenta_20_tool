import GodModel from "../../../models/God";

export default {
  Query: {
    gods: async () => GodModel.find(),
  },

  Mutation: {
    createGod: (_, { data }) => GodModel.create(data),
    updateGod: (_, { godId, data }) => GodModel.findByIdAndUpdate(godId, data),
  },
};
