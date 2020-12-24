const { celebrate, Segments, Joi } = require("celebrate");

module.exports = {
  login: celebrate({
    [Segments.BODY]: Joi.object().keys({
        user_name: Joi.string().min(3).max(60).required(),
    }),
  }),

  verify: celebrate({
    [Segments.HEADERS]: Joi.object().keys({
        authorization: Joi.string().required(),
    }).unknown()
  })
};