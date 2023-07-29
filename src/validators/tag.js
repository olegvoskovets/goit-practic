import Joi from "joi";
import { isValidObjectId } from "mongoose";

export const createTagSchema = Joi.object({
  title: Joi.string().required().min(2),
  _user_id: Joi.string()
    .required()
    .custom((value, helpers) => {
      if (!isValidObjectId(value)) {
        return helpers.error("any.invalid");
      }
      return value;
    }),
});
