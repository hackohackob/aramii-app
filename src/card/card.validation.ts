import Joi from 'joi';

export const createCardValidation = Joi.object({
  userId: Joi.number().required().messages({
    'number.base': 'Потребителят трябва да е число',
    'any.required': 'Потребителят е задължителен',
  }),
  cardNumber: Joi.string().required().messages({
    'string.empty': 'Номерът на картата е задължителен',
    'any.required': 'Номерът на картата е задължителен',
  }),
});