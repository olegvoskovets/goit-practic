import { isValidObjectId } from "mongoose";
import { ApiError } from "../helpers/apiError.js";

export const isValidId = (req, _, next) => {
  if (!isValidObjectId(req.params.id)) {
    next(ApiError(400, "Id is not valid"));
  }

  next();
};
