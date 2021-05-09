export default {
  Query: {
    gods: () => {
      return [
        {
          name: "Allihanna",
        },
      ];
    },
  },

  Mutation: {
    createGod: (_, {data}) => {
      return data;
    },
  },
};
