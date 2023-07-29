import Joi from "joi";

export const createUserSchema = Joi.object({
  name: Joi.string().required().min(3),
  phone_number: Joi.string()
    .required()
    .regex(/^[0-9\-\+]{9,15}$/),
});

export const updateUserSchema = Joi.object({
  name: Joi.string().required().min(3),
});
