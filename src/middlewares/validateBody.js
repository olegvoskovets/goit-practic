import { ApiError } from "../helpers/apiError.js";

export const validateBody = (schema) => (req, res, next) => {
  const { error } = schema.validate(req.body);
  if (error) {
    next(ApiError(404, error.message));
  }
  next();
};
