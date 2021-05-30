export default {
  Query: {
    races: () => {
      return [
        {
          name: "Humano",
        },
      ];
    },
  },

  Mutation: {
    createRace: (_, { data }) => {
      return data;
    },
  },
};
