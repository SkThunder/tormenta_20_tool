import UserModel from "../../../models/User";

export default {
  Query: {
    users: () => UserModel.find(),
  },

  Mutation: {
    createUser: (_, { data }) => UserModel.create(data),

    deleteUser: (_, { userId }) => UserModel.findByIdAndDelete(userId),
  },
};
