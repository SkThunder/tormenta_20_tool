const { celebrate, Segments, Joi } = require("celebrate");

module.exports = {
  create: celebrate({
    [Segments.BODY]: Joi.object().keys({
      user_name: Joi.string().required(),
    }),
  }),

  getById: celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      us_id: Joi.string().required(),
    }),
  }),

  update: celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      us_id: Joi.string().required(),
    }),
    [Segments.BODY]: Joi.object().keys({
      user_name: Joi.string().optional(),
    }),
  }),

  delete: celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      us_id: Joi.string().required(),
    }),
  }),
};
