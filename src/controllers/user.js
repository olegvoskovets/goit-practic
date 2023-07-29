import mongoose from "mongoose";
import { ApiError } from "../helpers/apiError.js";
import { controllerWrapper } from "../helpers/controllerWrapper.js";
import { User } from "../models/user.js";
import {
  createService,
  getAllService,
} from "../serviceControllers/serviceControllers.js";

// const createUser = async (req, res) => {
//   const user = await User.create(req.body);
//   res.status(201).json(user);
// };
const createUser = (req, res) => {
  createService(User, req, res);
};

const getAll = (req, res) => {
  getAllService(User, req, res);
};
const getById = async (req, res) => {
  const { id } = req.params;
  const objectId = new mongoose.Types.ObjectId(id);
  // const user = await User.findById(id);
  const users = await User.aggregate([
    { $match: { _id: objectId } },
    {
      $lookup: {
        from: "tags",
        localField: "_id",
        foreignField: "_user_id",
        as: "tags",
      },
    },
  ]);
  if (!users[0]) {
    throw ApiError(404, "User not found");
  }
  res.json(users[0]);
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  const user = await User.findByIdAndUpdate(id, req.body, { new: true });
  if (!user) {
    throw ApiError(404, "User not found");
  }
  res.json(user);
};

export const userControllers = {
  createUser: controllerWrapper(createUser),
  getAll: controllerWrapper(getAll),
  getById: controllerWrapper(getById),
  updateUser: controllerWrapper(updateUser),
};
