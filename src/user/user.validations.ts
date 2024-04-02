import Joi from 'joi';

export const createUserValidation = Joi.object({
  firstName: Joi.string().required().messages({
    'string.empty': 'Първото име е задължително',
    'any.required': 'Първото име е задължително',
  }),
  lastName: Joi.string().required().messages({
    'string.empty': 'Фамилията е задължителна',
    'any.required': 'Фамилията е задължителна',
  }),
  email: Joi.string().email().required().messages({
    'string.email': 'Въведете валиден имейл',
    'string.empty': 'Имейлът е задължителен',
    'any.required': 'Имейлът е задължителен',
  }),
});

export const updateUserValidation = Joi.object({
  firstName: Joi.string().required().messages({
    'string.empty': 'Първото име е задължително',
    'any.required': 'Първото име е задължително',
  }),
  lastName: Joi.string().required().messages({
    'string.empty': 'Фамилията е задължителна',
    'any.required': 'Фамилията е задължителна',
  }),
  email: Joi.string().email().required().messages({
    'string.email': 'Въведете валиден имейл',
    'string.empty': 'Имейлът е задължителен',
    'any.required': 'Имейлът е задължителен',
  }),
});

export const userIdValidation = Joi.object({
  userId: Joi.number().required().messages({
    'number.base': 'Потребителят трябва да е число',
    'any.required': 'Потребителят е задължителен',
  }),
});

export const deleteUserValidation = Joi.object({
  userId: Joi.number().required().messages({
    'number.base': 'Потребителят трябва да е число',
    'any.required': 'Потребителят е задължителен',
  }),
});

export const getUserValidation = Joi.object({
  userId: Joi.number().required().messages({
    'number.base': 'Потребителят трябва да е число',
    'any.required': 'Потребителят е задължителен',
  }),
});

