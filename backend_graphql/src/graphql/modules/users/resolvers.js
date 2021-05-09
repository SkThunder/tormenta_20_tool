import UserModel from "../../../models/User";

export default {
  Query: {
    users: () => {
      return [
        {
          name: "Jhonny",
        },
      ];
    },
  },

  Mutation: {
    createUser: (_, {data}) => {
      UserModel.create(data);
    },
  },
};
