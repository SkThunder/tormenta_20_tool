import OriginModel from "../../../models/Origin";

export default {
  Query: {
    origins: async () => OriginModel.find(),
  },

  Mutation: {
    createOrigin: (_, {data}) => OriginModel.create(data),
    updateOrigin: (_, {originId, data}) => OriginModel.findByIdAndUpdate(originId, data)
  },
};
