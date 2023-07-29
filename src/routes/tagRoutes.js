import express from "express";

import { validateBody } from "../middlewares/validateBody.js";
import { createTagSchema } from "../validators/tag.js";
import { tagControllers } from "../controllers/tag.js";
import { isValidId } from "../middlewares/isIdValid.js";

const tagRouter = express.Router();

tagRouter.post("/", validateBody(createTagSchema), tagControllers.createTag);

tagRouter.get("/:id", isValidId, tagControllers.getAllByUserId);

tagRouter.get("/", tagControllers.getAllTags);

export default tagRouter;
