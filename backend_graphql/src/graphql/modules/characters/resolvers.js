export default {
    Query: {
      characters: (_, {data}) => {
        return [
          {
            name: "Allihanna",
          },
        ];
      },
    },
  
    Mutation: {
      createCharacter: (_, {data}) => {
        return data;
      },
    },
  };
  