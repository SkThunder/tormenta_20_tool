const { celebrate, Segments, Joi } = require("celebrate");

module.exports = {
  create: celebrate({
    [Segments.BODY]: Joi.object().keys({
      user_name: Joi.string().min(3).max(60).required(),
      image_url: Joi.string().max(100).optional(),
      user_type: Joi.string().max(6).optional(),
    }),
  }),

  getById: celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      user_id: Joi.string().length(36).required(),
    }),
  }),

  update: celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      user_id: Joi.string().length(36).required(),
    }),
    [Segments.BODY]: Joi.object().keys({
      user_name: Joi.string().min(3).max(60).optional(),
      image_url: Joi.string().max(100).optional(),
      user_type: Joi.string().max(6).optional(),
    }),
  }),

  delete: celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      user_id: Joi.string().length(36).required(),
    }),
  }),
};
