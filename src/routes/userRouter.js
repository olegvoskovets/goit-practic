import express from "express";
import { userControllers } from "../controllers/user.js";
import { validateBody } from "../middlewares/validateBody.js";
import { createUserSchema, updateUserSchema } from "../validators/user.js";
import { isValidId } from "../middlewares/isIdValid.js";
const userRouter = express.Router();

userRouter.get("/", userControllers.getAll);

userRouter.get("/:id", isValidId, userControllers.getById);

userRouter.post(
  "/",
  validateBody(createUserSchema),
  userControllers.createUser
);

userRouter.put(
  "/:id",
  isValidId,
  validateBody(updateUserSchema),
  userControllers.updateUser
);

export default userRouter;
