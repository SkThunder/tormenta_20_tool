import UserModel from "../../../models/User";

export default {
  Query: {
    users: () => UserModel.find(),
  },

  Mutation: {
    createUser: (_, { data }) => UserModel.create(data),
    updateUser: (_, { userId, data }) =>
      UserModel.findByIdAndUpdate(userId, data),
    deleteUser: (_, { userId }) => UserModel.findByIdAndDelete(userId),
  },
};
