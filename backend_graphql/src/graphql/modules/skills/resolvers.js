import SkillModel from "../../../models/Skill";

export default {
  Query: {
    skills: async () => SkillModel.find(),
  },

  Mutation: {
    createSkill: (_, { data }) => SkillModel.create(data),
    updateSkill: (_, { skillId, data }) =>
      SkillModel.findByIdAndUpdate(skillId, data),
  },
};
