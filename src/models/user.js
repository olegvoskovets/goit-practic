import { Schema, model } from "mongoose";

const userSchema = new Schema({
  name: { type: String, required: true, minLength: 2 },
  phone_number: {
    type: String,
    required: true,
    unique: true,
    match: /^[0-9\-\+]{9,15}$/,
  },
});

export const User = model("users", userSchema);
