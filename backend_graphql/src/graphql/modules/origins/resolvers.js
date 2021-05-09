export default {
  Query: {
    origins: () => {
      return [
        {
          name: "Herdeiro",
        },
      ];
    },
  },

  Mutation: {
    createOrigin: (_, {data}) => {
      return data;
    },
  },
};
