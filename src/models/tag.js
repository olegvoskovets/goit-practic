import { Schema, model } from "mongoose";

const tagSchema = new Schema(
  {
    title: { type: String, required: true, minLength: 2 },
    _user_id: {
      type: Schema.Types.ObjectId,
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

export const Tag = model("tag", tagSchema);
