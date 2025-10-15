import Joi from 'joi';

export const validateUserSchema = Joi.object({
  name: Joi.string().min(2).max(50).required(),
  email: Joi.string().email().required(),
  password: Joi.string()
    .min(8)
    .max(30)
    .pattern(new RegExp('^(?=.*[A-Z])(?=.*[a-z])(?=.*\\d).+$'))
    .required()
    .messages({
      'string.pattern.base': 'Password must include uppercase, lowercase, and number',
    }),
  role: Joi.string().valid('user', 'admin').default('user'),
});
