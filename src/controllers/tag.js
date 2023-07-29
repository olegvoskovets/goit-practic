import { controllerWrapper } from "../helpers/controllerWrapper.js";
import { Tag } from "../models/tag.js";
import { createService } from "../serviceControllers/serviceControllers.js";

// const createTag = async (req, res) => {
//   const tag = await Tag.create(req.body);
//   res.status(201).json(tag);
// };
const createTag = (req, res) => {
  createService(Tag, req, res);
};

const getAllByUserId = async (req, res) => {
  const { id } = req.params;
  const tags = await Tag.find({ _user_id: id });
  res.status(200).json(tags);
};

const getAllTags = async (req, res) => {
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;
  const skip = (page - 1) * limit;
  const totalTags = await Tag.countDocuments();
  const totalPages = Math.ceil(totalTags / limit);
  const tags = await Tag.find().skip(skip).limit(limit);
  res.json({ page, limit, tags, totalPages });
};

export const tagControllers = {
  createTag: controllerWrapper(createTag),
  getAllByUserId: controllerWrapper(getAllByUserId),
  getAllTags: controllerWrapper(getAllTags),
};
