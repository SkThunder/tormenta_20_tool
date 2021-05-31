const { celebrate, Segments, Joi } = require("celebrate");

module.exports = {
  create: celebrate({
    [Segments.BODY]: Joi.object().keys({
      god_name: Joi.string().min(3).max(60).required(),
    }),
  }),

  getById: celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      god_id: Joi.string().length(36).required(),
    }),
  }),

  update: celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      god_id: Joi.string().length(36).required(),
    }),
    [Segments.BODY]: Joi.object().keys({
      god_name: Joi.string().min(3).max(60).optional(),
    }),
  }),

  delete: celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      god_id: Joi.string().length(36).required(),
    }),
  }),
};
